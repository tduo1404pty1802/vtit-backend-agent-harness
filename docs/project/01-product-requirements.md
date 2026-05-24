# Product Requirements

## Product Name

VTIT - He thong Tiep nhan va Dieu phoi Thong tin To giac Toi pham.

## Product Goal

Provide a controlled backend system for:

- receiving citizen crime reports.
- protecting reporter identity.
- preserving evidence metadata and integrity.
- scoring urgency.
- routing reports to the right police unit/officer.
- preventing duplicate staff handling through locks.
- auditing sensitive actions.

## Actors

- Citizen: submits and tracks own report anonymously.
- Dispatcher: receives new reports, locks cases, triages, assigns, changes status.
- Investigator: handles assigned/area cases, verifies, updates case status, adds evidence.
- Commander: sees system-wide cases, overrides urgent workflows, sees analytics.
- Admin: manages users, roles, categories, areas, police units, duty shifts, and rules.

## MVP Functional Requirements

### FR-01 Citizen Report Intake

Citizen can submit:

- crime category.
- description.
- incident location.
- whether incident is ongoing.
- whether weapon is present.
- whether injury is present.
- optional reporter identity/contact.
- evidence metadata and later evidence files.

System returns a public tracking code.

### FR-02 Reporter Identity Protection

Optional reporter identity is stored separately from case data and encrypted. Case APIs must not return PII by default.

### FR-03 Evidence Handling

System stores evidence metadata and object storage key. Files are stored in MinIO/S3-compatible storage. Evidence access is mediated by backend permission checks.

### FR-04 Case Lifecycle

System supports controlled status transitions:

```text
NEW -> TRIAGED -> VERIFYING -> TRANSFERRED_TO_INVESTIGATION -> RESOLVED
NEW/VERIFYING -> REJECTED_SPAM
non-final -> CANCELLED by commander
```

Every transition writes history and audit.

### FR-05 Urgency Scoring

System calculates deterministic urgency score and level using versioned rules and hard rules.

### FR-06 Smart Dispatch

System selects unit/officer by:

- administrative area.
- distance from incident.
- active duty shift.
- specialization.
- current load/capacity.

If no unit is available, system records `NO_AVAILABLE_UNIT` instead of silently assigning.

### FR-07 Locking And Assignment

System prevents duplicate staff handling:

- temporary lock token for staff workflow.
- optimistic version on case.
- transactional assignment.
- conflict response on concurrent mutation.

### FR-08 Permission Control

Backend enforces RBAC + ABAC. Frontend hiding is not security.

### FR-09 Audit

System records append-only audit events for sensitive actions.

### FR-10 Docker Demo

System can run with Docker Compose: app, PostgreSQL/PostGIS, Redis, MinIO.

## Non-Goals For Backend MVP

- Real emergency 113 integration.
- Real livestream/WebRTC.
- AI final decision for fake reports.
- Predictive policing as operational authority.
- Microservices.
- Frontend dashboard before backend Phase 6.

## Product Success Definition

The backend is successful when the demo scenario in `04-mvp-demo-scenario.md` runs end-to-end and all security/concurrency gates pass.

