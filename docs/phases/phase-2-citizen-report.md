# PHASE 2 - CITIZEN REPORT INTAKE HARNESS

> Goal: Let citizens submit and track anonymous crime reports through backend APIs.

## 0. Scope And Non-Goals

### In Scope

- Tracking code generator.
- Create report API.
- Safe citizen tracking API.
- Evidence metadata creation.
- MinIO object storage integration for evidence upload if file handling is included in issue.
- Initial audit events.
- Input validation.

### Non-Goals

- No staff workflow.
- No full RBAC/ABAC beyond public-safe citizen endpoints.
- No final dispatch algorithm.
- No AI spam detection.
- No frontend.

## 1. API Contract

```http
POST /api/v1/citizen/reports
GET /api/v1/citizen/reports/{trackingCode}
POST /api/v1/citizen/reports/{trackingCode}/evidences
```

## 2. C-A-R Task Map

### TASK-P2-A1: Tracking Code Generator

| Field | Value |
| --- | --- |
| Component | `cases` |
| Action | Implement non-sequential public tracking code generator |
| Result | Codes are unique, hard to guess, and suitable for citizen lookup |
| Depends on | Phase 1 |

### TASK-P2-A2: Create Report Request Model

| Field | Value |
| --- | --- |
| Component | `cases` |
| Action | Define request/response DTOs and validation for citizen report creation |
| Result | Invalid reports return structured validation errors |
| Depends on | TASK-P2-A1 |

### TASK-P2-A3: Create Report Service

| Field | Value |
| --- | --- |
| Component | `cases`, `identity`, `audit` |
| Action | Create case with status NEW, tracking code, optional reporter identity reference, and CASE_CREATED audit |
| Result | Case persists and response returns safe fields only |
| Depends on | TASK-P2-A2 |

### TASK-P2-A4: Evidence Metadata

| Field | Value |
| --- | --- |
| Component | `evidence` |
| Action | Store evidence metadata: type, size, checksum, object key, uploader type |
| Result | Evidence can be linked to case without public object URL |
| Depends on | TASK-P2-A3 |

### TASK-P2-A5: Citizen Tracking API

| Field | Value |
| --- | --- |
| Component | `cases` |
| Action | Implement safe lookup by tracking code |
| Result | Citizen sees public status and timestamps, no internal staff details |
| Depends on | TASK-P2-A3 |

## 3. Verification Gates

| Gate | Criteria |
| --- | --- |
| GATE-P2-CREATE | Citizen can create valid report |
| GATE-P2-VALIDATION | Invalid category/location/description rejected |
| GATE-P2-NO-PII | Response does not contain PII, encrypted payload, key id |
| GATE-P2-AUDIT | CASE_CREATED and EVIDENCE_UPLOADED events written |
| GATE-P2-TRACKING | Tracking code lookup returns safe public view |

## 4. Business Rules

- Description is required.
- Location is required.
- Category is required and must be active.
- Reporter identity is optional.
- Tracking code is the only public handle.
- Citizen tracking does not authorize staff-level detail.

## 5. Anti-Patterns

- Returning internal UUIDs to citizens when tracking code is enough.
- Returning officer/unit assignment in public tracking.
- Treating evidence object key as downloadable URL.
- Storing reporter phone/email plaintext.

## 6. Definition Of Done

- Citizen report can be created.
- Citizen can track safe status.
- Evidence metadata exists.
- Audit exists.
- No-PII tests pass.

