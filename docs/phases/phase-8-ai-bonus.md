# PHASE 8 - AI BONUS HARNESS

> Goal: Add AI-assisted features only after the deterministic backend is correct.

## Scope

- Report summarization.
- Spam/fake heuristic assistant.
- Suggested category/urgency hints.
- Optional trend explanation assistant.

## Non-Goals

- AI does not make final urgency decision.
- AI does not reject reports automatically.
- AI does not access reporter PII unless explicitly approved and audited.
- AI output is advisory.

## C-A-R Task Map

| Task | Component | Action | Result | Depends on |
| --- | --- | --- | --- | --- |
| TASK-P8-A1 | ai | Define AI data minimization contract | Prompt input excludes PII by default | Phase 6 |
| TASK-P8-A2 | ai | Implement report summarization job/API | Staff sees summary with original text preserved | TASK-P8-A1 |
| TASK-P8-A3 | ai | Implement spam heuristic assistant | Staff sees risk hints, not auto-rejection | TASK-P8-A2 |
| TASK-P8-A4 | audit | Audit AI-assisted decisions/overrides | Human accountability remains visible | TASK-P8-A3 |

## Gates

- AI input redaction test.
- No automatic rejection.
- Staff can see original report.
- AI output stored with model/version metadata.

