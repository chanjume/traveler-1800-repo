// One Sentence for a Traveler from 1800
// Writes a single sentence (178 characters) explaining the modern internet
// to a traveler from 1800, using only imagery they could picture:
// libraries, post offices, market stalls, letters, the sea, ink.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "Imagine every library, post office, and market stall on earth folded into one small room, where a letter you write crosses the sea before the ink dries — and the room talks back.";

if ([...SENTENCE].length < 1 || [...SENTENCE].length > 200) {
  throw new Error(`Sentence must be 1-200 characters, got ${[...SENTENCE].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
