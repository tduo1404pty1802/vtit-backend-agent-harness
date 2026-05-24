# PHASE 3 - IDENTITY ENCRYPTION AND PERMISSION HARNESS

> Goal: Make reporter identity, staff access, and case visibility safe enough for later workflows.

## 0. Scope And Non-Goals

### In Scope

- Reporter identity encryption.
- Dev key provider abstraction.
- Staff authentication skeleton.
- RBAC roles and permissions.
- ABAC case policy service.
- Permission guards for case APIs.
- No-PII and deny-by-default tests.
- Audited identity decrypt/view operation.

### Non-Goals

- No production KMS integration.
- No full admin UI.
- No frontend.
- No AI access to sensitive data.

## 1. Security Decisions

- Identity encryption uses envelope-encryption design.
- `identity` module is the only place allowed to decrypt PII.
- PII view is explicit, permission-checked, and audited.
- Default case DTOs exclude PII.

## 2. C-A-R Task Map

### TASK-P3-A1: Encryption Port

| Field | Value |
| --- | --- |
| Component | `identity` |
| Action | Define encryption/decryption interfaces and encrypted payload model |
| Result | Identity module has a replaceable crypto boundary |
| Depends on | Phase 2 |

### TASK-P3-A2: Dev Encryption Implementation

| Field | Value |
| --- | --- |
| Component | `identity` |
| Action | Implement dev-safe AES-GCM/envelope-style provider using env/config key |
| Result | PII can be encrypted/decrypted locally without plaintext storage |
| Depends on | TASK-P3-A1 |

### TASK-P3-A3: Staff Authentication

| Field | Value |
| --- | --- |
| Component | `auth`, `users` |
| Action | Implement staff authentication skeleton and role claims |
| Result | Staff endpoints can identify actor and roles |
| Depends on | Phase 1 |

### TASK-P3-A4: Case Permission Policy

| Field | Value |
| --- | --- |
| Component | `auth`, `cases` |
| Action | Implement RBAC + ABAC policy service based on role, area, assignment, lock owner |
| Result | Access decisions are centralized and testable |
| Depends on | TASK-P3-A3 |

### TASK-P3-A5: Safe Response DTOs

| Field | Value |
| --- | --- |
| Component | `cases`, `identity`, `evidence` |
| Action | Define citizen/staff/commander DTOs with explicit field sets |
| Result | Entity leakage is prevented |
| Depends on | TASK-P3-A4 |

### TASK-P3-A6: Identity View Flow

| Field | Value |
| --- | --- |
| Component | `identity`, `audit` |
| Action | Implement explicit identity decrypt/view service with permission check and audit |
| Result | PII access is rare, controlled, and recorded |
| Depends on | TASK-P3-A5 |

## 3. Verification Gates

| Gate | Criteria |
| --- | --- |
| GATE-P3-CRYPTO | PII stored encrypted, decrypt works only through identity service |
| GATE-P3-NO-PII | Case responses do not leak plaintext PII |
| GATE-P3-DENY | Unauthorized users receive 403/404 as appropriate |
| GATE-P3-ABAC | Investigator cannot view outside assigned/area scope |
| GATE-P3-AUDIT | Identity view writes audit |

## 4. Business Rules

- Admin is not automatically allowed to view PII.
- Dispatcher cannot view PII by default.
- Commander PII access requires explicit permission and audit.
- Citizen can track only public case state.

## 5. Anti-Patterns

- Checking permissions only in controller annotations when ABAC is needed.
- Returning entities directly.
- Logging request body containing PII.
- Hashing phone/email with unsalted plain SHA.

## 6. Definition Of Done

- PII encryption in place.
- Permission policy service tested.
- No-PII tests pass.
- Unauthorized access tests pass.

