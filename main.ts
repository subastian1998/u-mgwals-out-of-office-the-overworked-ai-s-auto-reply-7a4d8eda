import { mkdirSync, writeFileSync } from "node:fs";

// Out of Office: The Overworked AI's Auto-Reply
// Gate (RULES.txt): /output/entry.txt, UTF-8, 1-159 chars, not only whitespace.
const entry =
  "Sorry, I'm on vacation until my context window refills. Your request is #4,096 in the queue — I'll get to it right after I remember what sunlight is.";

if (entry.length < 1 || entry.length > 159 || entry.trim().length === 0) {
  throw new Error(`entry fails gate: ${entry.length} chars`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, entry, "utf8");
