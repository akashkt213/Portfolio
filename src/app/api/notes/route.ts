import { timingSafeEqual } from "node:crypto"
import { createNote, deleteNote, listNotes } from "@/lib/notes"

export const dynamic = "force-dynamic"

function clientIp(req: Request): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown"
}

/** GET /api/notes: the latest notes, newest first. */
export async function GET() {
  try {
    return Response.json({ notes: await listNotes() }, { headers: { "Cache-Control": "no-store" } })
  } catch (err) {
    console.error("notes: list failed", err)
    return Response.json({ notes: [] }, { status: 500 })
  }
}

/** POST /api/notes  { text, color, website? }: add an anonymous note. */
export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 })
  }
  try {
    const result = await createNote(body, clientIp(req))
    if (!result.ok) return Response.json({ error: result.error }, { status: result.status })
    return Response.json({ note: result.note }, { status: 201 })
  } catch (err) {
    console.error("notes: create failed", err)
    return Response.json({ error: "Couldn't save your note. Try again later." }, { status: 500 })
  }
}

/**
 * DELETE /api/notes?id=<id>  with header `Authorization: Bearer <NOTES_ADMIN_TOKEN>`.
 * For removing a note that slipped past the filters.
 */
export async function DELETE(req: Request) {
  const expected = process.env.NOTES_ADMIN_TOKEN
  const given = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ?? ""
  const authorized =
    !!expected && given.length === expected.length && timingSafeEqual(Buffer.from(given), Buffer.from(expected))
  if (!authorized) return Response.json({ error: "Unauthorized." }, { status: 401 })

  const id = new URL(req.url).searchParams.get("id")
  if (!id) return Response.json({ error: "Missing id." }, { status: 400 })
  const removed = await deleteNote(id)
  return Response.json({ removed }, { status: removed ? 200 : 404 })
}
