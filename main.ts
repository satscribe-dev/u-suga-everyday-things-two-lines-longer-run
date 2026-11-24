// Everyday Things, Two Lines, Longer Run
// Writes one two-line explanation to /output/entry.txt, deterministically.
//
// Line 1 explains a traffic jam to a 10-year-old in a single vivid sentence
// built on one analogy: ants carrying crumbs through a crack that fits one
// ant at a time. Line 2 says honestly what the analogy maps (the
// single-file squeeze, the slow crawl) and what it leaves out (ants all want
// the same crumb; drivers all want different places).

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "A traffic jam is a line of ants trying to carry crumbs through a crack in the wall that only fits one ant at a time.\n" +
  "It maps the single-file squeeze and the slow crawl, but leaves out that ants all want the same crumb and drivers all want different places.\n";

// Gate self-check (RULES.txt): /output/entry.txt must be UTF-8 text of
// 1-400 characters, not only white space, and exactly two lines. Fail loudly
// instead of writing an entry the sealed scorer would refuse.
const lines = ENTRY.split("\n");
if (ENTRY.length < 1 || ENTRY.length > 400) {
  throw new Error(`entry is ${ENTRY.length} characters, gate needs 1-400`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only white space");
}
if (lines.length !== 3 || lines[2] !== "" || lines[0].trim() === "" || lines[1].trim() === "") {
  throw new Error("entry must be exactly two non-empty lines");
}
for (const line of lines.slice(0, 2)) {
  // One sentence per line: exactly one sentence-ending period.
  if ((line.match(/\./g) ?? []).length !== 1 || !line.endsWith(".")) {
    throw new Error(`line is not a single sentence: ${line}`);
  }
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
