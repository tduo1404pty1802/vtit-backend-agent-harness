# VTIT Documentation Index

VTIT is a backend-first system for receiving and coordinating crime reports. The project must be built as a controlled engineering system, not as free-form AI-generated code.

## How To Use These Docs

Read in this order before any implementation:

1. `project/00-agent-start-here.md` - canonical entrypoint if the discussion file is removed.
2. `project/01-product-requirements.md` - what the system must build.
3. `project/02-user-roles-and-journeys.md` - who uses the system and how.
4. `project/03-backend-scope-and-epics.md` - backend epics and dependency graph.
5. `project/04-mvp-demo-scenario.md` - concrete demo flow to prove the backend.
6. `project/05-requirement-traceability.md` - source requirement coverage.
7. `01-architecture.md` - backend architecture and module boundaries.
8. `02-tech-stack.md` - selected stack and dependency policy.
9. `03-domain-model.md` to `11-locking-and-concurrency.md` - domain rules.
10. `harness/phase-system.md` - how phase harness docs and progress files work.
11. `harness/self-contained-readiness-check.md` - final handoff checklist.
12. `phases/phase-0-foundation.md` and the matching `progress/phase-0-progress.json`.
13. `13-ai-agent-harness.md` - mandatory AI agent operating rules.
14. `14-issue-template.md` and `15-review-checklists.md` - issue and review gates.
15. `18-agent-plugin-store.md` - repo-local AI agent plugin/store structure.
16. `publishing/npm-package-plan.md` - npm/GitHub package distribution plan.

## Project North Star

Build a reliable MVP where:

- A citizen submits an anonymous crime report with evidence.
- The backend encrypts identity information.
- The backend calculates urgency.
- The backend routes the case to the right available unit.
- A dispatcher opens the case, locks it, and moves it to `VERIFYING`.
- Every sensitive action is permission-checked and audited.

## Documentation Rule

`docs/discussion_about_the_project.md` is background only and can be removed. The canonical project source is now `docs/project/`, `docs/phases/`, `docs/progress/`, `AGENTS.md`, and `plugins/vtit-backend-agent/`.

If code and docs conflict, stop and ask for review. Do not silently follow code drift.
