# Concurrency Contract

Canonical doc is `../../../docs/11-locking-and-concurrency.md`.

## Required Controls

- Optimistic locking with `case_reports.version`.
- Transactional row-level locking for assignment/status changes.
- Temporary lock token for human workflow.

## Case Lock Rules

- Only one active lock per case.
- Lock token required for lock-protected mutations.
- Expired locks do not authorize mutations.
- Non-owner lock token does not authorize mutations.

## Tests Required

- two concurrent assignment requests, only one succeeds.
- stale version returns conflict.
- expired lock cannot mutate.
- non-owner lock cannot mutate.

