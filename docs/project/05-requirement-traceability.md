# Requirement Traceability

This file proves the project remains understandable without `docs/discussion_about_the_project.md`.

## Source Requirement Coverage

| Original Requirement | Canonical Docs | Implementation Phase |
| --- | --- | --- |
| Report Case Management | `01-product-requirements.md`, `03-domain-model.md`, `04-database-erd.md`, `08-state-machine.md` | Phase 1, 2, 6 |
| Crime categories and urgency levels | `10-urgency-scoring.md`, `phase-4-urgency-scoring.md` | Phase 1, 4 |
| Dynamic evidence files | `06-security-model.md`, `phase-2-citizen-report.md` | Phase 2 |
| Case statuses | `08-state-machine.md`, `phase-1-domain-db.md`, `phase-6-staff-workflow.md` | Phase 1, 6 |
| Emergency Dispatch Matrix | `09-dispatch-algorithm.md`, `phase-5-dispatch-locking.md` | Phase 5 |
| Duty shifts and availability | `04-database-erd.md`, `phase-1-domain-db.md`, `phase-5-dispatch-locking.md` | Phase 1, 5 |
| Geographic distance to nearest unit | `09-dispatch-algorithm.md`, `ADR-0002`, `phase-5-dispatch-locking.md` | Phase 5 |
| Urgency Scoring Engine | `10-urgency-scoring.md`, `phase-4-urgency-scoring.md` | Phase 4 |
| Smart routing to specialized unit | `09-dispatch-algorithm.md`, `phase-5-dispatch-locking.md` | Phase 5 |
| Anonymity and identity encryption | `06-security-model.md`, `ADR-0005`, `phase-3-security-permission.md` | Phase 3 |
| Temporary case lock | `11-locking-and-concurrency.md`, `phase-5-dispatch-locking.md` | Phase 5 |
| Race-condition prevention | `11-locking-and-concurrency.md`, `phase-5-dispatch-locking.md` | Phase 5 |
| Strict view permission | `07-permission-matrix.md`, `phase-3-security-permission.md`, `phase-6-staff-workflow.md` | Phase 3, 6 |
| Admin command dashboard | `phase-7-command-analytics.md` | Phase 7 |
| Timeline and heatmap | `phase-7-command-analytics.md` | Phase 7 |
| Docker packaging | `phase-0-foundation.md` | Phase 0 |
| Demo citizen report to verifying | `04-mvp-demo-scenario.md`, `phase-6-staff-workflow.md` | Phase 0-6 |
| AI spam/summarization bonus | `phase-8-ai-bonus.md` | Phase 8 |
| Crime analytics and forecasting | `phase-7-command-analytics.md`, `phase-8-ai-bonus.md` | Phase 7-8 |
| Live chat/evidence stream | Deferred; not MVP. Add ADR before implementation. | Future |

## Critical Coverage Check

- The agent knows what product to build from `01-product-requirements.md`.
- The agent knows who uses it from `02-user-roles-and-journeys.md`.
- The agent knows the demo target from `04-mvp-demo-scenario.md`.
- The agent knows the implementation order from `03-backend-scope-and-epics.md` and `docs/phases/`.
- The agent knows task state from `docs/progress/`.
- The agent knows constraints from `AGENTS.md`, `13-ai-agent-harness.md`, and plugin skill docs.

## Known Deferred Items

- Frontend dashboard is intentionally after backend core.
- Real emergency integration is intentionally out of MVP.
- Livestream/WebRTC is intentionally future work.
- AI never makes final operational decisions in MVP.

