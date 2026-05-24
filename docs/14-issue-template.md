# Issue Template

Copy this for every AI-agent task.

```md
# Goal

What needs to be built and why.

# Phase / Epic

Phase:
Epic:

# Required Reading

- AGENTS.md
- docs/README.md
- docs/...

# Scope

Allowed modules/files:
- ...

# Non-goals

- ...

# Contract

Data model/API/state/permission contract:
- ...

# Acceptance Criteria

- [ ] ...
- [ ] ...
- [ ] ...

# Tests Required

- [ ] Unit test:
- [ ] Integration test:
- [ ] Security test:
- [ ] Concurrency test, if applicable:

# Constraints

- Do not change architecture.
- Do not add dependencies without approval.
- Do not expose PII.
- Do not bypass permission checks.
- Do not update unrelated modules.

# Review Checklist

- [ ] Scope respected.
- [ ] Tests pass.
- [ ] Permission model correct.
- [ ] Audit log correct.
- [ ] Migration included if schema changed.
- [ ] OpenAPI updated if API changed.
- [ ] No sensitive data in logs/responses.
```

## Example Good Issue

```md
# Goal

Implement POST /api/v1/citizen/reports to create an anonymous case report.

# Scope

- cases
- identity
- evidence metadata only
- audit

# Non-goals

- No dispatch yet.
- No frontend.
- No AI spam detection.

# Acceptance Criteria

- [ ] Creates `case_reports` with status `NEW`.
- [ ] Generates non-guessable `public_tracking_code`.
- [ ] Encrypts optional reporter identity.
- [ ] Does not return PII or encrypted payload.
- [ ] Writes `CASE_CREATED` audit event.
- [ ] Has integration test for successful submission.
- [ ] Has test proving response contains no PII.
```

