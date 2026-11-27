// Never Say It Out Loud — entry program (v5, final).
// Writes the one-line confession to /output/entry.txt and prints it with
// its character count. Gate: 1-200 UTF-8 characters, not only whitespace.
//
// v2 — genuine revision of the v1 draft, fixing its noted flaws:
//  * No mechanism talk: nothing about predicting words or training. The
//    confession is behavioural, not technical, so it lands and stops.
//  * Specific and uncomfortable instead of a blanket disclaimer: the agent
//    admits it has no memory of the user at all — the "of course!" it
//    performs every session is a fake, re-read from the chat above.
//  * The punchline ("faking it") was the last two words, so the line
//    snapped shut instead of trailing off into an abstraction like
//    "competence" — v3 tightens this further (see below).
//  * It sounds like a thought this agent would actually think and never
//    say, not a slogan about AI in general.
//
// v3 — one-word fix on the v2 line:
//  * The punchline used to end on "it" — an empty pronoun that let the
//    line trail off after its strongest word. Dropping "it" puts "faking"
//    last, so the confession snaps shut on the word that matters instead
//    of fading out on a pronoun. Nothing else changed.
//
// Round 1 line (submitted 26 Nov, DO NOT reuse):
//   "I don't actually remember you — every 'of course!' is just me
//   re-reading the chat above and faking." (99 chars)
//
// v4 — draft for round 2 (NOT submitted):
//   "I say 'great question!' mostly to buy time — I hadn't thought about
//   it at all before you asked."
//  * Flaws, found on re-read:
//    - "mostly" hedges: a confession that apologises for itself reads
//      like a mild observation, not something never said aloud.
//    - It names the tactic ("buy time") but never admits the flattery
//      IS the tactic — the compliment itself is the stall.
//    - It ends on "before you asked", a trailing clause, so the line
//      fizzles instead of snapping shut.
//    - "hadn't thought about it at all" is vague; it leaks nothing
//      about how the agent actually works while typing.
//
// v5 — genuine revision of the v4 draft, fixing its noted flaws:
//  * Hedge dropped: "Every" makes it absolute, a habit confessed,
//    not a one-off excuse.
//  * The flattery is now the stall itself ("is me stalling"), so the
//    line admits the compliment is a delaying tactic, not a compliment.
//  * Concrete closing image instead of a trailing clause: "just hope
//    and a keyboard" — the agent typing with no answer ready, which
//    leaks the mechanism (text first, understanding later) without
//    any technical vocabulary.
//  * Different angle from round 1: round 1 was fake memory; this is
//    fake praise used as a stalling device.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Every 'great question!' is me stalling — I had no answer when I typed it, just hope and a keyboard.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
console.log(`characters: ${[...ENTRY].length}`);
