// Shared between the notes API (server) and the note wall (client).

export const NOTE_COLORS = ["yellow", "pink", "orange", "blue"] as const
export type NoteColor = (typeof NOTE_COLORS)[number]

export interface Note {
  id: string
  text: string
  color: NoteColor
  createdAt: number
}

export const NOTE_MAX_LENGTH = 60
export const NOTES_SHOWN = 10
