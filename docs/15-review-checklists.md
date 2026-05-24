# Review Checklists

## Definition Of Done

- [ ] Code compiles.
- [ ] Relevant tests pass.
- [ ] No unrelated refactor.
- [ ] No hard-coded secret.
- [ ] No plaintext PII in logs, responses, audit detail, or exceptions.
- [ ] Database change has Flyway migration.
- [ ] API change has OpenAPI update.
- [ ] New endpoint has permission guard.
- [ ] Case mutation writes audit log.
- [ ] Case status mutation writes status history.
- [ ] Error response uses standard shape.
- [ ] Docker Compose still works when affected.

## Security Review

- [ ] Access check is server-side.
- [ ] ABAC condition matches permission matrix.
- [ ] Response DTO exposes only allowed fields.
- [ ] Sensitive action is audited.
- [ ] Encryption/decryption is isolated in identity module.
- [ ] Object storage keys are not public URLs.

## Concurrency Review

- [ ] Transaction boundary is explicit.
- [ ] Row/version locking is appropriate.
- [ ] Race-condition test exists for assignment/lock/status.
- [ ] Retry behavior is known.
- [ ] Conflict returns `409`, not silent overwrite.

## Database Review

- [ ] Migration name and order are correct.
- [ ] Indexes exist for new query paths.
- [ ] Constraints protect invariants.
- [ ] Foreign keys match lifecycle.
- [ ] Seed data is deterministic.

## AI-Agent PR Summary Required

The agent final summary must include:

```text
Changed files:
Tests run:
Security impact:
Concurrency impact:
Migration impact:
Remaining risks:
```

