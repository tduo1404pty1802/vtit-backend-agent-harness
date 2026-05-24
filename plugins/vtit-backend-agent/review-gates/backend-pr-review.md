# Backend PR Review Gate

## Scope

- [ ] Implements one issue only.
- [ ] No unrelated refactor.
- [ ] No architecture drift.

## Security

- [ ] Server-side permission checks.
- [ ] ABAC condition correct.
- [ ] No PII exposure.
- [ ] Sensitive action audited.

## Data

- [ ] Migration included if schema changed.
- [ ] Constraints/indexes present.
- [ ] OpenAPI updated if API changed.

## Case Workflow

- [ ] State machine used.
- [ ] Status history written.
- [ ] Audit log written.

## Concurrency

- [ ] Transaction boundary correct.
- [ ] Conflict behavior explicit.
- [ ] Race test exists when needed.

## Testing

- [ ] Unit tests.
- [ ] Integration tests.
- [ ] Security/concurrency tests when applicable.

