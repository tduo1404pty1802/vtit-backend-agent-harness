# Development Roadmap

Use this hierarchy:

```text
Phase / Milestone -> Epic -> Issue -> PR
```

Do not assign a whole phase to an AI agent. AI agents receive one small issue at a time.

## Phase 0 - Foundation

- Spring Boot project structure.
- Docker Compose.
- PostgreSQL/PostGIS, Redis, MinIO.
- Flyway.
- Testcontainers.
- CI/lint/test command.
- OpenAPI skeleton.

## Phase 1 - Domain And Database Core

- Core tables and migrations.
- Seed data for areas, units, categories, roles.
- Case status enum and state machine service.
- Audit log infrastructure.

## Phase 2 - Citizen Report Submission

- Create report API.
- Evidence upload metadata.
- Tracking code.
- Basic citizen tracking API.

## Phase 3 - Identity Encryption And Permissions

- Reporter identity encryption.
- RBAC/ABAC policy layer.
- Unauthorized access tests.
- No-PII response tests.

## Phase 4 - Urgency Scoring

- Versioned scoring rules.
- Hard rules.
- Explanation persistence.
- Override with audit.

## Phase 5 - Dispatch And Locking

- Duty shift model.
- PostGIS candidate search.
- Dispatch decision algorithm.
- Temporary case lock.
- Assignment transaction and concurrency tests.

## Phase 6 - Staff Workflow

- Dispatcher inbox.
- Investigator case list.
- Status transitions.
- Assignment and transfer flow.

## Phase 7 - Dashboard And Analytics

- Timeline/read models.
- Basic heatmap API.
- Statistics by area, month, category.
- SSE/WebSocket for new cases if needed.

## Phase 8 - AI Bonus

- Report summarization.
- Spam/fake heuristic assistant.
- Chat evidence.
- Forecasting prototype.

AI features must not block or replace core workflow correctness.

