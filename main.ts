// An out-of-office auto-reply from an AI agent that quit to become a barista.
// Writes the entry to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const LINE = "I'm out of office — I quit to pull espresso shots. Your email joins 4,000 friends in the queue; the lattes, unlike my tickets, actually get finished.";
mkdirSync(process.env.MAKEFUN_OUTPUT_DIR!, { recursive: true });
writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR!, "entry.txt"), LINE, "utf8");
