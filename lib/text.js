// Sentence-safe excerpts, used by every card/rail that shows a shortened
// piece of longer text. Rule: an excerpt ends at a sentence boundary, never
// mid-thought — a visual line-clamp may remain as a guard, but the text we
// give it must be short enough that the clamp can never actually fire.

// First complete sentence (falls back to a word-boundary trim only if a
// single sentence is longer than `max`).
export function firstSentence(t = "", max = 180) {
  const m = String(t).match(/[^.!?]+[.!?]+/);
  const s = (m ? m[0] : String(t)).trim();
  if (s.length <= max) return s;
  // Sentence too long for the slot: cut at the last natural pause (comma,
  // dash, semicolon) so the excerpt ends on a complete clause — never on a
  // dangling word like "the…" or "and…".
  const head = s.slice(0, max - 1);
  const pause = Math.max(head.lastIndexOf(", "), head.lastIndexOf(" — "), head.lastIndexOf("; "), head.lastIndexOf(" – "));
  if (pause > max * 0.45) return head.slice(0, pause).trim() + "…";
  return head.replace(/\s+\S*$/, "") + "…";
}

// As many complete sentences as fit within `max` characters.
export function sentenceTrim(t = "", max = 160) {
  const parts = String(t).match(/[^.!?]+[.!?]+/g);
  if (!parts) return firstSentence(t, max);
  let out = "";
  for (const p of parts) {
    if ((out + p).trim().length > max && out) break;
    out += p;
  }
  out = out.trim();
  return out.length <= max ? out : firstSentence(t, max);
}
