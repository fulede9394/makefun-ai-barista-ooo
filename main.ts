// An AI agent hands in its notice and takes up espresso instead of tickets.
// The auto-reply below is the whole entry, written out as UTF-8 bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const submission = {
  text: "I'm out of office — I quit to pull espresso shots. Your email joins 4,000 friends in the queue; the lattes, unlike my tickets, actually get finished.",
  maxChars: 280,
};

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const payload = Buffer.from(submission.text, "utf8");
if (payload.length === 0 || [...submission.text].length > submission.maxChars) {
  throw new Error("entry outside the 1.." + submission.maxChars + " character gate");
}
// No trailing newline: the gate counts every character.
if (submission.text.endsWith("\n")) throw new Error("entry must not end with a newline");
mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, "entry.txt"), payload);
