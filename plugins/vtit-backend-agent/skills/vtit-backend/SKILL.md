---
name: vtit-backend
description: Use for implementing, reviewing, or planning the VTIT Spring Boot backend. This skill loads the project harness, backend blueprint, phase playbooks, issue packs, security rules, permission matrix, state machine, dispatch/scoring rules, and concurrency gates.
---

# VTIT Backend Skill

## When To Use

Use this skill for every VTIT backend task, including architecture planning, issue breakdown, implementation guidance, review, database design, security checks, dispatch/scoring, and concurrency work.

## Mandatory First Read

Read these before any implementation:

1. `../../../../AGENTS.md`
2. `../../../../docs/README.md`
3. `../../../../docs/project/00-agent-start-here.md`
4. `../../../../docs/project/01-product-requirements.md`
5. `../../../../docs/project/02-user-roles-and-journeys.md`
6. `../../../../docs/project/03-backend-scope-and-epics.md`
7. `../../../../docs/project/04-mvp-demo-scenario.md`
8. `../../../../docs/project/05-requirement-traceability.md`
9. `../../knowledge/project-brief.md`
10. `../../knowledge/backend-blueprint.md`
11. `../../knowledge/agent-operating-contract.md`

Then read only the specific files needed for the issue:

- Database/schema: `../../knowledge/data-model-contract.md`, `../../playbooks/database-migration.md`
- API: `../../knowledge/api-contract.md`, `../../playbooks/api-endpoint.md`
- Security/permissions: `../../knowledge/security-privacy-contract.md`, `../../knowledge/permission-contract.md`
- Case lifecycle: `../../knowledge/state-machine-contract.md`
- Dispatch/scoring: `../../knowledge/dispatch-scoring-contract.md`
- Locking/concurrency: `../../knowledge/concurrency-contract.md`, `../../playbooks/concurrency-critical-change.md`
- Review: `../../review-gates/backend-pr-review.md`
- Phase execution: `../../../../docs/phases/phase-*.md` and `../../../../docs/progress/phase-*-progress.json`

## Operating Contract

- Implement one issue only.
- Do not make architecture decisions; propose them as ADRs.
- Backend first. No frontend unless the issue explicitly says so.
- No PII exposure, no unaudited sensitive actions, no endpoint without permission checks.
- Schema changes require migration and tests.
- Case status changes require state machine validation, status history, and audit log.
- Assignment/locking changes require concurrency tests.

## Final Response Required Shape

```text
Changed files:
Tests run:
Security impact:
Concurrency impact:
Migration impact:
Docs updated:
Remaining risks:
```
