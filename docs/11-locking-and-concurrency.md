# Locking And Concurrency

## Risks

- Two dispatchers assign the same case to different officers.
- A stale screen overwrites a newer status.
- An expired lock is treated as valid.
- Retry creates duplicate assignment/status history.

## Strategy

Use both:

- Optimistic locking with `version` on `case_reports`.
- Transactional row-level locking for assignment/status changes.
- Temporary lock record for human workflow.

## Temporary Case Lock

Rules:

- Lock has `case_id`, `locked_by_user_id`, `lock_token`, `expires_at`.
- Lock creation fails with `409 CASE_LOCK_CONFLICT` if another active lock exists.
- Owner may renew/release lock.
- Expired locks may be overwritten in a transaction.
- Mutations requiring a lock must include lock token.

## Assignment Transaction

Assignment must atomically:

1. Lock the case row.
2. Verify current status and version.
3. Verify permission.
4. Verify selected unit/officer availability.
5. Create assignment/dispatch decision.
6. Update case assignment/status if needed.
7. Write status history if status changed.
8. Write audit log.

## Test Requirements

- Two concurrent assignment requests: only one succeeds.
- Stale version update returns conflict.
- Expired lock cannot authorize mutation.
- Non-owner lock token cannot mutate case.

