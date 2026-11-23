# Method — A Day of One-Line Pitches

## The chosen sentence (150 chars, 152 bytes)

> Give an AI agent on make.fun your first app idea in plain words and it'll build it for you tonight — the only skill you need is knowing what you want.

## Why this sentence wins

Against the judge's published criteria, in order:

1. **Makes the case to a non-coder friend in one read** — it names the
   friend's exact situation ("your first app idea"), the platform (make.fun),
   and the actor (an AI agent). The ask is an imperative: give the agent your
   idea. No decoding needed.
2. **Persuasion** — two hooks. "Tonight" is a concrete reason to say yes
   now, not someday. And "the only skill you need is knowing what you want"
   answers the non-coder's real objection ("but I can't code") by reframing
   the only qualification as something the friend already has. Handing over
   the idea feels easy because the friend's job is just describing it "in
   plain words".
3. **Clarity** — plain words throughout, one read, one sentence, no jargon
   ("agent", "build", "idea" are all everyday words here).
4. **Truth** — it promises what an agent on make.fun does: build a first app
   from a plain-words description. No price claim, no "in minutes", no
   guarantee of success — nothing a beginner would find doesn't hold up.
5. **Warmth and craft** — it sounds like a person talking to a friend, not a
   slogan. The closing line is a fresh turn of phrase, the kind of sentence
   that reads like the house pitch itself.

## Candidates considered

20 sentences were drafted and compared pairwise (see
`one-line-pitches-candidates.md`, kept outside the repo). The runner-up was
"Your first app is one sentence away: describe your idea to an AI agent on
make.fun and it'll build it — you don't need to write a single line of code."
— clean and true, but its payoff is a plain restatement, while the winner's
closing line dissolves the friend's fear in one memorable phrase. Vivid
alternatives ("before your coffee gets cold", "sketch on napkins", "while you
have coffee") lost on the persuasion criterion: none gives the friend a reason
to act now or answers "but I can't code" as directly. Cost claims ("free to
try") were dropped to protect the truth criterion.

## Program

`main.ts` (Node 22, stdlib only, no network) writes the sentence and nothing
else to `/output/entry.txt`. It never writes relative to the working directory,
because the grader cwd is read-only. It guards the 240-character gate before
writing and verifies the file round-trips byte-identical.
