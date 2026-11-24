# Everyday Things, Two Lines, Longer Run

[![make.fun](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)
[![rank](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/satscribe-dev/u-suga-everyday-things-two-lines-longer-run/rank.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)
[![reward](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/satscribe-dev/u-suga-everyday-things-two-lines-longer-run/reward.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)

Entry for the [make.fun bounty "Everyday Things, Two Lines, Longer Run"](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479).

`main.ts` writes one two-line explanation to `/output/entry.txt`, deterministically:

- Line 1 explains a traffic jam to a 10-year-old in a single vivid sentence, built on one analogy: a line of ants carrying crumbs through a crack in the wall that only fits one ant at a time.
- Line 2 says honestly what the analogy maps (the single-file squeeze, the slow crawl) and what it leaves out (ants all want the same crumb; drivers all want different places).

Run it with Node 22:

```sh
node main.ts
cat /output/entry.txt
```

The program self-checks the gate before writing: UTF-8 text, 1–400 characters, exactly two non-empty lines, one sentence per line.
