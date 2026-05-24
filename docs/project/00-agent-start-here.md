# Agent Start Here

This is the canonical starting point when `docs/discussion_about_the_project.md` is removed.

## What This Project Builds

VTIT is a backend-first crime-report intake and dispatch system.

The backend must let a citizen submit an anonymous crime report with evidence, protect reporter identity, score urgency, route the case to a suitable police unit, let staff lock and process the case, and audit every sensitive action.

## Read Order For AI Agent

1. `AGENTS.md`
2. `docs/project/00-agent-start-here.md`
3. `docs/project/01-product-requirements.md`
4. `docs/project/02-user-roles-and-journeys.md`
5. `docs/project/03-backend-scope-and-epics.md`
6. `docs/project/04-mvp-demo-scenario.md`
7. `docs/project/05-requirement-traceability.md`
8. `docs/01-architecture.md`
9. `docs/02-tech-stack.md`
10. `docs/harness/phase-system.md`
11. The current phase file in `docs/phases/`
12. The current progress file in `docs/progress/`

## Execution Model

```text
Phase -> Epic -> C-A-R Task -> Issue -> PR
```

The agent must not implement a whole phase in one PR. The phase file tells the agent what exists in the phase. The issue tells the agent which single task to implement now.

## Current Backend Target

Build backend Phases 0-6 before frontend:

- Phase 0: Foundation.
- Phase 1: Domain and database core.
- Phase 2: Citizen report intake.
- Phase 3: Identity encryption and permission layer.
- Phase 4: Urgency scoring.
- Phase 5: Dispatch matrix and case locking.
- Phase 6: Staff workflow.

Phase 7 and Phase 8 are later:

- Phase 7: Command dashboard APIs and analytics.
- Phase 8: AI bonus features.

## If Unsure

Stop and ask for review if the missing decision affects:

- architecture.
- schema semantics.
- permissions.
- reporter identity encryption.
- case state machine.
- dispatch/assignment correctness.
- concurrency/locking behavior.
