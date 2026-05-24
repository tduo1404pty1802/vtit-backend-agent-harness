# Product Scope

## Problem

The system receives citizen crime reports, protects reporter identity, scores urgency, dispatches reports to the right area/unit, and supports officers through a controlled case lifecycle.

## MVP In Scope

- Citizen anonymous report submission.
- Evidence upload metadata and storage integration.
- Reporter PII encryption.
- Public tracking code for citizen lookup.
- Case lifecycle and status history.
- Urgency scoring with explainable rules.
- Dispatch by area, distance, duty shift availability, and specialization.
- Temporary case lock and assignment transaction.
- Strict RBAC/ABAC permission checks.
- Append-only audit log for sensitive actions.
- Docker Compose for app, PostgreSQL/PostGIS, Redis, and MinIO.

## Not In MVP

- Real emergency service integration.
- Real livestream/WebRTC evidence.
- AI final decision for fake/real reports.
- Predictive policing as an operational decision system.
- Multi-service microservice architecture.
- Public access to evidence URLs.

## Demo Flow

1. Citizen submits report with description, location, category, optional identity/contact, and video/image evidence.
2. Backend creates tracking code, encrypts identity, stores evidence metadata, calculates checksum, scores urgency, and dispatches to a suitable unit.
3. Dispatcher receives the case, opens it, gets a temporary lock, and changes status from `NEW` to `VERIFYING`.
4. Dashboard/API shows updated status and audit trail.

## Success Criteria

- Core flow runs end-to-end through Docker Compose.
- No API returns reporter PII by default.
- Unauthorized access tests exist for case APIs.
- Race-condition tests exist for assignment/locking.
- Status transitions are validated by a state machine.

