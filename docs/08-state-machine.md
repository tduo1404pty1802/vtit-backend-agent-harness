# Case State Machine

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

## Allowed Transitions

| From | To | Actor | Required Condition |
| --- | --- | --- | --- |
| NEW | TRIAGED | Dispatcher | Dispatch decision exists |
| NEW | VERIFYING | Dispatcher | Lock owned by actor |
| NEW | REJECTED_SPAM | Dispatcher | Reason required |
| TRIAGED | VERIFYING | Dispatcher/Investigator | Assignment exists |
| VERIFYING | TRANSFERRED_TO_INVESTIGATION | Investigator/Dispatcher | Reason and receiving unit required |
| VERIFYING | RESOLVED | Investigator | Resolution note required |
| VERIFYING | REJECTED_SPAM | Investigator | Reason required |
| TRANSFERRED_TO_INVESTIGATION | RESOLVED | Investigator | Resolution note required |
| Any non-final | CANCELLED | Commander | Reason required |

## Final States

```text
RESOLVED
REJECTED_SPAM
CANCELLED
```

Final states cannot transition unless a commander reopens through a future audited flow. MVP should not implement reopen.

## Rules

- Every transition writes `case_status_history`.
- Every transition writes `audit_logs`.
- Invalid transitions return `409 CASE_INVALID_STATUS_TRANSITION`.
- Status changes requiring lock must verify the active lock token.

