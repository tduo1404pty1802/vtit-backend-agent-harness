# PHASE 6 - STAFF WORKFLOW HARNESS

> Goal: Complete the backend staff workflow required for the MVP demo.

## 0. Scope And Non-Goals

### In Scope

- Dispatcher inbox.
- Investigator assigned case list.
- Case detail for authorized staff.
- Status transition endpoint.
- Transfer to investigation.
- Resolve/reject spam/cancel flows.
- Audit and status history tests.

### Non-Goals

- No frontend dashboard.
- No realtime heatmap.
- No AI features.
- No advanced analytics.

## 1. C-A-R Task Map

### TASK-P6-A1: Dispatcher Inbox

| Field | Value |
| --- | --- |
| Component | `cases`, `dispatch`, `auth` |
| Action | List new/triaged cases visible to dispatcher by duty scope |
| Result | Dispatcher sees actionable cases only |
| Depends on | Phase 5 |

### TASK-P6-A2: Staff Case Detail

| Field | Value |
| --- | --- |
| Component | `cases`, `evidence`, `auth` |
| Action | Return staff-safe case detail based on permission |
| Result | Staff can review case without PII leak |
| Depends on | TASK-P6-A1 |

### TASK-P6-A3: Investigator Case List

| Field | Value |
| --- | --- |
| Component | `cases`, `auth` |
| Action | List cases assigned to investigator or allowed by area |
| Result | Investigator sees only allowed cases |
| Depends on | TASK-P6-A2 |

### TASK-P6-A4: Status Transition Endpoint

| Field | Value |
| --- | --- |
| Component | `cases`, `locking`, `audit` |
| Action | Implement transition endpoint using state machine, permission, lock token where required |
| Result | Status changes are valid, historized, audited |
| Depends on | TASK-P6-A2 |

### TASK-P6-A5: Transfer Flow

| Field | Value |
| --- | --- |
| Component | `cases`, `dispatch` |
| Action | Transfer case to investigation unit/officer with reason |
| Result | Status becomes `TRANSFERRED_TO_INVESTIGATION` and assignment is updated safely |
| Depends on | TASK-P6-A4 |

### TASK-P6-A6: Finalization Flows

| Field | Value |
| --- | --- |
| Component | `cases`, `audit` |
| Action | Implement resolve, reject spam, commander cancel with required reason |
| Result | Final states are enforced |
| Depends on | TASK-P6-A4 |

## 2. Verification Gates

| Gate | Criteria |
| --- | --- |
| GATE-P6-INBOX | Dispatcher sees only scoped cases |
| GATE-P6-INVESTIGATOR | Investigator sees assigned/area cases only |
| GATE-P6-STATUS | Invalid transition returns conflict |
| GATE-P6-HISTORY | Every transition writes history |
| GATE-P6-AUDIT | Every sensitive action writes audit |
| GATE-P6-DEMO | MVP demo reaches VERIFYING |

## 3. Business Rules

- `VERIFYING` requires actor permission and lock where defined.
- Transfer requires receiving unit/officer and reason.
- Resolve requires resolution note.
- Reject spam requires reason.
- Cancel is commander-only in MVP.

## 4. Anti-Patterns

- Free-form status update.
- Missing audit/status history.
- Returning PII in staff detail by accident.
- Allowing final state changes without explicit reopen flow.

## 5. Definition Of Done

- Backend MVP demo passes.
- Staff workflow endpoints are permission-checked.
- Status history and audit tests pass.

