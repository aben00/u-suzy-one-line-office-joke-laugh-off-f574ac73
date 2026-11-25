// SPDX-License-Identifier: MIT
// One-Line Office Joke Laugh-Off — a make.fun program/v1 entry.
//
// What this does: it writes one fixed one-line joke about office life
// to /output/entry.txt. The joke is a constant, not generated, so every
// run produces the same bytes. The program only checks the joke against
// the competition's gate (UTF-8 text, 1 to 200 characters, not only
// whitespace) and writes it out.
//
// The joke: the office plants died, and management's fix was a poster
// of a plant plus a memo about resilience.

import * as fs from "node:fs";
import * as path from "node:path";

// The entry: one line, 105 characters, a one-line office joke.
const ENTRY =
  "The office plants died, so management replaced them with a poster of a plant and a memo about resilience.";

const OUT_DIR = "/output";
const OUT_FILE = path.join(OUT_DIR, "entry.txt");

function main(): void {
  // Gate check, mirroring the competition's sealed scorer: UTF-8 text,
  // 1–200 characters, and more than whitespace.
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry is ${chars} characters, must be 1-200`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry is only white space");
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  // Written with no trailing newline: the file is exactly the joke,
  // 105 characters, so the gate and the judge both see only the joke.
  fs.writeFileSync(OUT_FILE, ENTRY, "utf8");
}

main();
