# Initial Backlog For AI Agents

These are example issues to create in order. Each issue must still use `14-issue-template.md`.

## Phase 0 - Foundation

1. Create Spring Boot modular monolith skeleton.
2. Add Docker Compose with PostgreSQL/PostGIS, Redis, MinIO, and app.
3. Add Flyway and first empty migration.
4. Add Testcontainers base integration test.
5. Add global error response shape and request correlation ID.
6. Add OpenAPI generation/skeleton.

## Phase 1 - Domain And Database Core

1. Add roles, users, officers, areas, police units, crime categories migrations.
2. Add case report, status history, audit log migrations.
3. Implement case status enum and transition validator.
4. Seed sample areas, units, duty shifts, and categories.
5. Implement append-only audit service.

## Phase 2 - Citizen Report Submission

1. Implement tracking code generator.
2. Implement reporter identity encryption interface with dev key provider.
3. Implement `POST /api/v1/citizen/reports`.
4. Implement evidence metadata creation for report submission.
5. Implement `GET /api/v1/citizen/reports/{trackingCode}` with safe response.

## Phase 3 - Security

1. Implement staff authentication skeleton.
2. Implement role/permission model.
3. Implement case ABAC policy service.
4. Add unauthorized access tests for citizen, dispatcher, investigator.
5. Add no-PII response tests across case APIs.

## Phase 4 - Scoring

1. Add urgency rule set migrations and seed default rules.
2. Implement deterministic scoring service.
3. Persist scoring explanation.
4. Add hard-rule tests for weapon/ongoing/injury cases.
5. Implement urgency override with reason and audit.

## Phase 5 - Dispatch And Locking

1. Implement duty shift availability query.
2. Implement PostGIS nearest candidate query.
3. Implement dispatch decision scoring.
4. Implement temporary case lock API.
5. Implement assignment transaction.
6. Add concurrent assignment integration test.

## Phase 6 - Staff Workflow

1. Implement dispatcher inbox.
2. Implement investigator assigned case list.
3. Implement status transition endpoint with lock token.
4. Implement transfer to investigation flow.
5. Add audit/status-history tests for every transition.

