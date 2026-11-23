import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One-Line Pitches — a one-sentence pitch to a non-coder friend: describe the
// idea in plain words, the agent builds it tonight, and the only skill the
// friend needs is knowing what they want. The grader cwd is read-only, so
// nothing is ever written relative to it — only /output/entry.txt.
const LINE =
  "Give an AI agent on make.fun your first app idea in plain words and it'll build it for you tonight — the only skill you need is knowing what you want.";
// The gate requires 1–240 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error(`entry line out of gate: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify the written file round-trips byte-identical to the chosen sentence.
if (readFileSync("/output/entry.txt", "utf8") !== LINE) {
  throw new Error("entry.txt does not match the chosen sentence");
}
