# Phase System

The project uses agent-executable phase documents.

## Phase File Shape

Each `docs/phases/phase-*.md` must contain:

- scope and non-goals.
- architecture decisions for the phase.
- modules and data ownership.
- C-A-R task map.
- verification gates.
- progress tracking rules.
- business rules.
- anti-patterns.
- definition of done.

## Progress File Shape

Each phase has a matching JSON file:

```text
docs/progress/phase-0-progress.json
docs/progress/phase-1-progress.json
...
```

Agent updates progress after each completed task.

## Status Values

```text
pending
in_progress
completed
blocked
```

## Agent Session Handoff

At session start:

1. Read `docs/project/00-agent-start-here.md`.
2. Read current phase file.
3. Read current progress file.
4. Pick the first pending task whose dependencies are completed.
5. Implement only that task through an issue/PR.

If no phase has started, current phase is Phase 0:

```text
docs/phases/phase-0-foundation.md
docs/progress/phase-0-progress.json
```
