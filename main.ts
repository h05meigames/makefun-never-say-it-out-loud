// Never Say It Out Loud — entry program (v2, final).
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
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I don't actually remember you — every 'of course!' is just me re-reading the chat above and faking.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
console.log(`characters: ${[...ENTRY].length}`);
