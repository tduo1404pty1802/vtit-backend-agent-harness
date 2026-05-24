# State Machine Contract

Canonical state machine is `../../../docs/08-state-machine.md`.

## Statuses

```text
NEW
TRIAGED
VERIFYING
TRANSFERRED_TO_INVESTIGATION
RESOLVED
REJECTED_SPAM
CANCELLED
```

## Mutation Rules

- Validate transition before update.
- Require reason where documented.
- Require lock token where documented.
- Write `case_status_history`.
- Write audit log.
- Invalid transition returns `409 CASE_INVALID_STATUS_TRANSITION`.

## Final States

`RESOLVED`, `REJECTED_SPAM`, and `CANCELLED` are final in MVP.

