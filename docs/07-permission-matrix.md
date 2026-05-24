# Permission Matrix

## Roles

- `CITIZEN`: anonymous/public user with tracking code.
- `DISPATCHER`: receives and coordinates new reports.
- `INVESTIGATOR`: verifies/handles assigned or area-owned cases.
- `COMMANDER`: sees system-wide command dashboard and statistics.
- `ADMIN`: manages categories, users, roles, rules, and reference data.

## Matrix

| Action | Citizen | Dispatcher | Investigator | Commander | Admin |
| --- | --- | --- | --- | --- | --- |
| Submit report | Yes | No | No | No | No |
| Track own public status | Tracking code | No | No | No | No |
| View new unassigned cases | No | Yes, by duty scope | No | Yes | No |
| View assigned case | No | If scope allows | If assigned/area allows | Yes | No |
| View reporter PII | No | No by default | Explicit permission only | Explicit permission only | No by default |
| Upload evidence | Own tracked case | Yes | Assigned case | No | No |
| Lock case | No | Yes | Yes | No | No |
| Assign case | No | Yes | No | Yes | No |
| Change status | No | Allowed transitions | Allowed transitions | Override with reason | No |
| Manage categories/rules | No | No | No | No | Yes |
| View audit logs | No | Limited | Limited | Yes | Admin security only |

## ABAC Conditions

Permission may depend on:

- User role.
- Officer duty status.
- Case area.
- Unit jurisdiction.
- Case assignment.
- Lock owner.
- Case sensitivity.
- Requested field level.

## Review Rule

For every endpoint, write permission as:

```text
role requirement + attribute condition + fields allowed in response
```

