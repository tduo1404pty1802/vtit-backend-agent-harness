# API Contract

All APIs use JSON unless uploading files with multipart.

## Citizen APIs

```http
POST /api/v1/citizen/reports
GET /api/v1/citizen/reports/{trackingCode}
POST /api/v1/citizen/reports/{trackingCode}/evidences
```

`POST /citizen/reports` response:

```json
{
  "trackingCode": "VTIT-...",
  "status": "NEW",
  "urgencyLevel": "HIGH",
  "createdAt": "2026-05-23T00:00:00Z"
}
```

Citizen responses must never include encrypted payloads, key IDs, internal assignment data, or officer identities.

## Dispatcher APIs

```http
GET /api/v1/dispatcher/cases?status=NEW
POST /api/v1/dispatcher/cases/{caseId}/locks
DELETE /api/v1/dispatcher/cases/{caseId}/locks/{lockToken}
POST /api/v1/dispatcher/cases/{caseId}/assignments
POST /api/v1/dispatcher/cases/{caseId}/status-transitions
```

## Investigator APIs

```http
GET /api/v1/investigator/cases
GET /api/v1/investigator/cases/{caseId}
POST /api/v1/investigator/cases/{caseId}/status-transitions
POST /api/v1/investigator/cases/{caseId}/evidences
```

## Commander APIs

```http
GET /api/v1/command/cases
GET /api/v1/command/heatmap
GET /api/v1/command/statistics
```

## Error Shape

```json
{
  "code": "CASE_LOCK_CONFLICT",
  "message": "Case is locked by another user.",
  "requestId": "..."
}
```

## API Rules

- Every endpoint must define role and attribute-based access rules.
- Every state-changing endpoint must be audited.
- Case mutation endpoints must be idempotent where retry is expected.
- OpenAPI must be updated when an endpoint is added or changed.

