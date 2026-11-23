// One Letter: Coffee or Tea — make.fun entry
// The choice is coffee. Coffee is the drink that wakes a room up:
// dark, hot, unapologetic, the one that turns a slow morning into
// a working one. Tea soothes; coffee decides. So the letter is A.
//
// This program writes exactly one character, "A", to entry.txt
// in the output directory and nothing else. No newline, no word,
// no explanation. Deterministic by construction: the same byte
// every run, no input, no network, no clock, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const letter = "A";

// The gate allows exactly one character, so refuse to write
// anything else rather than risk an invalid entry.
if (letter.length !== 1) {
  throw new Error("entry must be exactly one letter");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), letter, "utf8");
