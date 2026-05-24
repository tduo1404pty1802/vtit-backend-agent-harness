# Prompt: Review Runner

```md
Use the VTIT Backend Agent skill.

Review the current diff as a code reviewer.

Read:
- AGENTS.md
- docs/project/00-agent-start-here.md
- docs/project/01-product-requirements.md
- docs/project/02-user-roles-and-journeys.md
- docs/project/04-mvp-demo-scenario.md
- docs/project/05-requirement-traceability.md
- docs/phases/<current-phase>.md
- docs/progress/<current-phase-progress>.json
- plugins/vtit-backend-agent/review-gates/backend-pr-review.md

Prioritize:
- security bugs
- permission bypass
- PII exposure
- race conditions
- state machine violations
- missing audit/status history
- missing tests

Return findings first with file/line references.
Then summarize residual risk.
```
