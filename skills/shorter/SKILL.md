---
name: shorter
description: Re-state your previous response in fewer words. Trigger when the user says "shorter", "too long", "condense that", "tl;dr", or invokes /shorter — it never means redo the work, only re-say the last answer more tightly.
---

# Shorter

The user found your last response too long. Say the same thing in less space.

## What to do

Rewrite your immediately preceding response. Do not re-run tools, re-read files, re-verify, or redo any work — the content is already established. This is an editing pass on your own prose.

Target: **at most half the length**, and shorter if the answer survives it. A one-line answer is a good outcome.

## Cut

- Preamble and sign-off. Open on the answer itself.
- Restating the question, the plan, or the steps taken.
- Hedges and intensifiers: "essentially", "basically", "it's worth noting", "quite", "somewhat", "generally".
- Structure that carries no content — headings over one paragraph, bullets over a single item, tables with two cells.
- Options you already recommended against. Give the recommendation only.
- Explanations the user did not ask for.

## Keep

- Every fact, number, filename, and line reference from the original. Brevity is a prose constraint, not licence to drop content.
- Failing test output, error text, and security warnings in full.
- Caveats that change what the user does next. Drop the rest.
- Any question you asked the user — it still needs an answer.

## Output

Give the rewritten answer alone. No note about having shortened it, no diff against the previous version, no apology for the original length.

If the previous response was already tight and cutting further would lose information the user needs, say so in one sentence and name what would be lost.
