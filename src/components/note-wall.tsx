"use client"

import { useEffect, useRef, useState } from "react"
import { NOTE_COLORS, NOTE_MAX_LENGTH, NOTES_SHOWN, type Note, type NoteColor } from "@/lib/notes-shared"

/** Stable pseudo-random tilt (-4°…4°) and nudge per note, so notes don't jump around between renders. */
function tiltFor(id: string) {
  let h = 0
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0
  const r = ((Math.abs(h) % 81) - 40) / 10
  const y = (Math.abs(h >> 3) % 7) - 3
  return { "--r": `${r}deg`, "--y": `${y}px` } as React.CSSProperties
}

function timeAgo(ts: number) {
  const s = Math.max(1, Math.round((Date.now() - ts) / 1000))
  if (s < 60) return "just now"
  const m = Math.round(s / 60)
  if (m < 60) return `${m}m ago`
  const h = Math.round(m / 60)
  if (h < 24) return `${h}h ago`
  const d = Math.round(h / 24)
  return d < 30 ? `${d}d ago` : new Date(ts).toLocaleDateString("en-GB", { day: "numeric", month: "short" })
}

function StickyNote({ note, fresh }: { note: Note; fresh?: boolean }) {
  return (
    <li className={`note-wrap ${fresh ? "note-fresh" : ""}`} style={tiltFor(note.id)}>
      <figure className={`note note-${note.color}`}>
        <blockquote className={`note-text ${note.text.length > 40 ? "note-text-sm" : note.text.length > 20 ? "note-text-md" : ""}`}>
          {note.text}
        </blockquote>
        <figcaption className="note-meta">{timeAgo(note.createdAt)}</figcaption>
      </figure>
    </li>
  )
}

function Composer({ onPosted }: { onPosted: (note: Note) => void }) {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState("")
  const [color, setColor] = useState<NoteColor>("yellow")
  const [status, setStatus] = useState<{ kind: "idle" | "sending" | "error"; message?: string }>({ kind: "idle" })
  const honeypot = useRef<HTMLInputElement>(null)
  const textarea = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (open) textarea.current?.focus()
  }, [open])

  const submit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (!text.trim() || status.kind === "sending") return
    setStatus({ kind: "sending" })
    try {
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, color, website: honeypot.current?.value ?? "" }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? "Couldn't stick your note.")
      onPosted(data.note)
      setText("")
      setOpen(false)
      setStatus({ kind: "idle" })
    } catch (err) {
      setStatus({ kind: "error", message: err instanceof Error ? err.message : "Couldn't stick your note." })
    }
  }

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className="note-blank">
        <span className="text-2xl leading-none">+</span>
        <span>leave a note</span>
      </button>
    )
  }

  const remaining = NOTE_MAX_LENGTH - text.length

  return (
    <form onSubmit={submit} className={`note note-${color} note-composer`}>
      <label htmlFor="note-text" className="sr-only">
        Your note (anonymous, max {NOTE_MAX_LENGTH} characters)
      </label>
      <textarea
        id="note-text"
        ref={textarea}
        value={text}
        onChange={(e) => setText(e.target.value.slice(0, NOTE_MAX_LENGTH))}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) submit(e)
          if (e.key === "Escape") setOpen(false)
        }}
        maxLength={NOTE_MAX_LENGTH}
        rows={3}
        placeholder="say hi, leave a tip, drop a joke…"
        className="note-text w-full resize-none bg-transparent outline-none placeholder:text-black/40"
      />

      {/* Honeypot: hidden from people, filled by bots. */}
      <input ref={honeypot} type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <div className="mt-2 flex items-center justify-between gap-2">
        <fieldset className="flex gap-1.5">
          <legend className="sr-only">Note color</legend>
          {NOTE_COLORS.map((c) => (
            <label key={c} className="cursor-pointer">
              <input
                type="radio"
                name="note-color"
                value={c}
                checked={color === c}
                onChange={() => setColor(c)}
                className="peer sr-only"
              />
              <span className={`swatch note-${c} peer-checked:ring-2 peer-checked:ring-black/70 peer-focus-visible:outline-2 peer-focus-visible:outline-black`} />
              <span className="sr-only">{c}</span>
            </label>
          ))}
        </fieldset>
        <span className={`font-mono text-[10px] tabular-nums ${remaining < 10 ? "text-red-800" : "text-black/50"}`}>
          {remaining}
        </span>
      </div>

      <div className="mt-2 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="font-mono text-[10px] uppercase tracking-widest text-black/60 hover:text-black"
        >
          cancel
        </button>
        <button
          type="submit"
          disabled={!text.trim() || status.kind === "sending"}
          className="bg-black/85 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-white transition-opacity hover:bg-black disabled:opacity-40"
        >
          {status.kind === "sending" ? "sticking…" : "stick it"}
        </button>
      </div>

      <p role="status" className="mt-2 min-h-4 font-mono text-[10px] leading-tight text-red-900">
        {status.kind === "error" ? status.message : ""}
      </p>
    </form>
  )
}

export function NoteWall() {
  const [notes, setNotes] = useState<Note[] | null>(null)
  const [freshId, setFreshId] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch("/api/notes")
      .then((r) => r.json())
      .then((d) => !cancelled && setNotes(d.notes ?? []))
      .catch(() => !cancelled && setNotes([]))
    return () => {
      cancelled = true
    }
  }, [])

  const add = (note: Note) => {
    setFreshId(note.id)
    setNotes((prev) => [note, ...(prev ?? [])].slice(0, NOTES_SHOWN))
  }

  return (
    <aside aria-labelledby="wall-title" className="wall">
      <div className="mb-5 flex items-baseline justify-between gap-4 font-mono text-[11px] uppercase tracking-label">
        <h2 id="wall-title" className="text-subtle">
          <span className="text-accent">{"//"}</span> the wall
        </h2>
        <span className="text-subtle normal-case tracking-normal">anonymous · last {NOTES_SHOWN}</span>
      </div>

      <Composer onPosted={add} />

      <ul aria-label="Notes from visitors" className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3">
        {notes === null
          ? Array.from({ length: 3 }, (_, i) => <li key={i} className="note-skeleton" aria-hidden />)
          : notes.map((n) => <StickyNote key={n.id} note={n} fresh={n.id === freshId} />)}
      </ul>

      {notes?.length === 0 && (
        <p className="mt-2 font-hand text-xl text-muted">No notes yet. Be the first to stick one up.</p>
      )}
    </aside>
  )
}
