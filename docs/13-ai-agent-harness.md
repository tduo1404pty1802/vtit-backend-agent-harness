# AI Agent Harness

## Purpose

Harness Engineering means designing the environment around the AI agent: constraints, docs, tool permissions, verification gates, review gates, and feedback loops. For this project, the harness is more important than clever prompting.

## Control Model

```text
Guide -> Plan -> Execute -> Verify -> Review
```

- Guide: `AGENTS.md` and docs tell the agent what is allowed.
- Plan: agent states exact issue scope, files, tests, risks.
- Execute: agent changes only scoped files.
- Verify: agent runs deterministic checks.
- Review: human reviews diff and risks before merge.

## Agent Must Do

- Work on one issue only.
- Read relevant docs before editing.
- Keep changes small.
- Use existing patterns.
- Add or update tests with behavior changes.
- Update OpenAPI for API changes.
- Add Flyway migration for schema changes.
- Add audit log for sensitive actions.
- Mention security/concurrency impact in final summary.

## Agent Must Not Do

- Do not invent architecture.
- Do not create microservices.
- Do not build frontend before backend core.
- Do not add AI features before Phase 8.
- Do not expose PII.
- Do not skip permission checks.
- Do not catch exceptions and ignore them.
- Do not weaken tests.
- Do not add fake/mock implementation unless the issue explicitly asks for a stub.

## Issue Prompt Template

```md
You are implementing Issue <id> only.

Read:
- AGENTS.md
- docs/README.md
- docs/<relevant-doc>.md

Goal:
...

Scope:
...

Non-goals:
...

Acceptance Criteria:
- [ ] ...

Tests Required:
- [ ] ...

Before coding, respond with:
- plan
- files/modules expected to change
- risks
```

## Stop Conditions

The agent must stop and ask for review when:

- Docs conflict.
- A schema change affects existing data semantics.
- Security strategy is unclear.
- Permission matrix lacks the requested action.
- State transition is missing.
- Concurrency behavior is ambiguous.
- A dependency or architecture change seems necessary.

## Verification Gates

Minimum gates before PR completion:

- Compile.
- Unit tests.
- Integration tests relevant to changed module.
- Migration validates on clean database.
- Security tests for new case endpoints.
- Concurrency tests for locks/assignment/status changes.

