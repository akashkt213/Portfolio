import { createHash, randomUUID } from "node:crypto"
import { Redis } from "@upstash/redis"
import { RegExpMatcher, englishDataset, englishRecommendedTransformers } from "obscenity"
import { NOTE_COLORS, NOTE_MAX_LENGTH, NOTES_SHOWN, type Note, type NoteColor } from "./notes-shared"

/**
 * Visitor sticky notes.
 *
 * Storage: Upstash Redis when configured (UPSTASH_REDIS_REST_URL/TOKEN, or the KV_REST_API_URL/TOKEN
 * names the Vercel Marketplace integration sets). In local dev without those, notes live in memory.
 */

const NOTES_KEPT = 50 // older notes are trimmed
const RATE_LIMIT = { max: 3, windowSeconds: 600 }
const KEY = "notes"

// ── Storage ────────────────────────────────────────────────────────────

const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL
const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN
const redis = url && token ? new Redis({ url, token }) : null

export const notesEnabled = redis !== null || process.env.NODE_ENV !== "production"

// Dev-only fallback. Kept on globalThis so hot reloads don't wipe it.
const memory = globalThis as unknown as { __notes?: Note[]; __notesRate?: Map<string, number[]> }
memory.__notes ??= []
memory.__notesRate ??= new Map()

export async function listNotes(): Promise<Note[]> {
  if (redis) return (await redis.lrange<Note>(KEY, 0, NOTES_SHOWN - 1)) ?? []
  return memory.__notes!.slice(0, NOTES_SHOWN)
}

async function saveNote(note: Note) {
  if (redis) {
    await redis.pipeline().lpush(KEY, note).ltrim(KEY, 0, NOTES_KEPT - 1).exec()
    return
  }
  memory.__notes!.unshift(note)
  memory.__notes!.length = Math.min(memory.__notes!.length, NOTES_KEPT)
}

export async function deleteNote(id: string): Promise<boolean> {
  if (redis) {
    const all = (await redis.lrange<Note>(KEY, 0, -1)) ?? []
    const match = all.find((n) => n.id === id)
    if (!match) return false
    await redis.lrem(KEY, 1, match)
    return true
  }
  const i = memory.__notes!.findIndex((n) => n.id === id)
  if (i === -1) return false
  memory.__notes!.splice(i, 1)
  return true
}

// ── Rate limiting (per hashed IP, fixed window) ─────────────────────────

async function isRateLimited(ip: string): Promise<boolean> {
  const hashed = createHash("sha256").update(ip).digest("hex").slice(0, 32)
  if (redis) {
    const key = `notes:rl:${hashed}`
    const count = await redis.incr(key)
    if (count === 1) await redis.expire(key, RATE_LIMIT.windowSeconds)
    return count > RATE_LIMIT.max
  }
  const now = Date.now()
  const recent = (memory.__notesRate!.get(hashed) ?? []).filter((t) => now - t < RATE_LIMIT.windowSeconds * 1000)
  recent.push(now)
  memory.__notesRate!.set(hashed, recent)
  return recent.length > RATE_LIMIT.max
}

// ── Validation ─────────────────────────────────────────────────────────

const profanity = new RegExpMatcher({ ...englishDataset.build(), ...englishRecommendedTransformers })
const LINK = /(https?:\/\/|www\.|\b[a-z0-9-]+\.(com|net|org|io|dev|xyz|ru|cn|app|co|me|ly|gg)\b)/i
const CONTROL_CHARS = /[\u0000-\u001f\u007f​-‏‪-‮]/g

export type CreateResult =
  | { ok: true; note: Note }
  | { ok: false; status: number; error: string }

export async function createNote(input: unknown, ip: string): Promise<CreateResult> {
  if (!notesEnabled) return { ok: false, status: 503, error: "Notes aren't set up yet." }

  const body = (input ?? {}) as Record<string, unknown>

  // Honeypot: real visitors never see or fill this field.
  if (typeof body.website === "string" && body.website.length > 0) {
    return { ok: false, status: 400, error: "Something went wrong." }
  }

  const text = typeof body.text === "string" ? body.text.replace(CONTROL_CHARS, "").replace(/\s+/g, " ").trim() : ""
  const color = NOTE_COLORS.includes(body.color as NoteColor) ? (body.color as NoteColor) : "yellow"

  if (text.length === 0) return { ok: false, status: 400, error: "Write something first." }
  if (text.length > NOTE_MAX_LENGTH) return { ok: false, status: 400, error: `Keep it under ${NOTE_MAX_LENGTH} characters.` }
  if (LINK.test(text)) return { ok: false, status: 400, error: "No links, please." }
  if (profanity.hasMatch(text)) return { ok: false, status: 400, error: "Let's keep it friendly." }
  if (await isRateLimited(ip)) return { ok: false, status: 429, error: "That's a lot of notes. Try again in a few minutes." }

  const note: Note = { id: randomUUID(), text, color, createdAt: Date.now() }
  await saveNote(note)
  return { ok: true, note }
}
