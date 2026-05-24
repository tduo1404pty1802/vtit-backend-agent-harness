# PHASE 5 - DISPATCH MATRIX AND CASE LOCKING HARNESS

> Goal: Route cases to suitable units and prevent duplicate handling under concurrency.

## 0. Scope And Non-Goals

### In Scope

- Duty shift availability query.
- PostGIS candidate search.
- Dispatch scoring.
- Dispatch decision persistence.
- Temporary case lock API.
- Assignment transaction.
- Concurrent assignment tests.

### Non-Goals

- No real 113 integration.
- No vehicle routing optimization.
- No frontend map.
- No distributed microservice queue.

## 1. C-A-R Task Map

### TASK-P5-A1: Duty Availability Query

| Field | Value |
| --- | --- |
| Component | `dispatch` |
| Action | Query active duty shifts by time, unit/officer, area |
| Result | Available units/officers can be filtered |
| Depends on | Phase 1 |

### TASK-P5-A2: PostGIS Candidate Query

| Field | Value |
| --- | --- |
| Component | `geography`, `dispatch` |
| Action | Find units within radius and matching area using PostGIS |
| Result | Candidate units ordered with distance |
| Depends on | TASK-P5-A1 |

### TASK-P5-A3: Dispatch Decision Engine

| Field | Value |
| --- | --- |
| Component | `dispatch` |
| Action | Score candidates by distance, load, specialization, area fit, urgency |
| Result | Best unit selected with explanation |
| Depends on | TASK-P5-A2 |

### TASK-P5-A4: No Available Unit Path

| Field | Value |
| --- | --- |
| Component | `dispatch` |
| Action | Persist explicit `NO_AVAILABLE_UNIT` decision when no candidate qualifies |
| Result | Dispatcher/commander can see unresolved dispatch |
| Depends on | TASK-P5-A3 |

### TASK-P5-A5: Temporary Case Lock

| Field | Value |
| --- | --- |
| Component | `locking` |
| Action | Implement lock create/renew/release with lock token and expiration |
| Result | One active user owns a case lock |
| Depends on | Phase 3 |

### TASK-P5-A6: Assignment Transaction

| Field | Value |
| --- | --- |
| Component | `cases`, `dispatch`, `locking`, `audit` |
| Action | Assign case atomically with row lock/version check, permission, status/history/audit |
| Result | Concurrent assignment cannot create conflicting state |
| Depends on | TASK-P5-A5 |

## 2. Verification Gates

| Gate | Criteria |
| --- | --- |
| GATE-P5-GEO | Nearest available valid unit can be found |
| GATE-P5-AVAILABILITY | Unavailable nearest unit is skipped |
| GATE-P5-SPECIALIZATION | Required specialization affects selection |
| GATE-P5-NO-UNIT | No unit path is explicit |
| GATE-P5-LOCK | Second active lock returns conflict |
| GATE-P5-CONCURRENT | Two concurrent assignments: one succeeds, one conflicts |

## 3. Business Rules

- Available but farther unit beats unavailable nearest unit.
- Specialized category should prefer matching specialized unit.
- Assignment must be transactional.
- Expired lock does not authorize mutation.
- Lock owner only can mutate lock-protected operation.

## 4. Anti-Patterns

- Choosing only nearest unit.
- Assigning silently when no unit is available.
- Updating assignment without audit.
- Relying only on frontend to prevent double click.
- Using lock token without checking expiration and owner.

## 5. Definition Of Done

- Dispatch decision is explainable.
- Temporary lock works.
- Assignment transaction has race tests.
- Audit and status history are correct.

