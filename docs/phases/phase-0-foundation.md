# PHASE 0 - FOUNDATION HARNESS

> Type: Agent-Executable Harness Document
> Project: VTIT Backend
> Phase: 0/8 - Foundation
> Goal: Create a stable Spring Boot backend foundation so later phases can plug in without structure drift.
> Executor: AI Agent
> Reviewer: Human Owner

## 0. Scope And Non-Goals

### In Scope

- Spring Boot modular monolith skeleton.
- Maven or Gradle project setup, selected once and kept consistent.
- Package/module layout.
- Docker Compose for app, PostgreSQL/PostGIS, Redis, MinIO.
- Flyway setup.
- Testcontainers setup.
- Global error response.
- Request correlation ID.
- OpenAPI skeleton.
- Health endpoints.

### Non-Goals

- No business case APIs.
- No frontend.
- No AI features.
- No microservices.
- No real external integrations.

## 1. Fixed Decisions

- Java 21 LTS.
- Spring Boot 4.0.x for greenfield work, fallback 3.5.x only if compatibility blocks.
- Modular monolith.
- PostgreSQL/PostGIS.
- Redis.
- MinIO.
- Flyway.
- Testcontainers.

## 2. Required Folder Shape

```text
src/main/java/com/vtit/
  common/
  auth/
  users/
  geography/
  cases/
  evidence/
  identity/
  scoring/
  dispatch/
  locking/
  audit/
  notification/
  analytics/
src/main/resources/
src/test/java/com/vtit/
docker/
docs/
```

## 3. C-A-R Task Map

### TASK-P0-A1: Project Skeleton

| Field | Value |
| --- | --- |
| Component | Backend project |
| Action | Create Spring Boot project with selected build tool, Java 21, dependency management, base package `com.vtit` |
| Result | Project builds with no business logic and one health endpoint |
| Depends on | none |

### TASK-P0-A2: Module Packages

| Field | Value |
| --- | --- |
| Component | Package layout |
| Action | Create module package structure and package-info/module boundary docs |
| Result | Future agents have exact package targets |
| Depends on | TASK-P0-A1 |

### TASK-P0-A3: Shared Error And Correlation

| Field | Value |
| --- | --- |
| Component | `common` |
| Action | Add standard error response, global exception handling, request ID/correlation ID |
| Result | Errors return `{code,message,requestId}` and logs include request ID |
| Depends on | TASK-P0-A1 |

### TASK-P0-A4: Flyway And Database Connectivity

| Field | Value |
| --- | --- |
| Component | Database foundation |
| Action | Configure PostgreSQL/PostGIS connection and Flyway baseline |
| Result | Clean database migrates on startup |
| Depends on | TASK-P0-A1 |

### TASK-P0-A5: Docker Compose

| Field | Value |
| --- | --- |
| Component | Local infrastructure |
| Action | Add compose for app, PostgreSQL/PostGIS, Redis, MinIO |
| Result | `docker compose up` starts infrastructure and app health passes |
| Depends on | TASK-P0-A4 |

### TASK-P0-A6: Testcontainers Base

| Field | Value |
| --- | --- |
| Component | Test infrastructure |
| Action | Add integration test base for PostgreSQL/PostGIS, Redis, MinIO |
| Result | A sample integration test verifies containers start |
| Depends on | TASK-P0-A5 |

### TASK-P0-A7: OpenAPI Skeleton

| Field | Value |
| --- | --- |
| Component | API docs |
| Action | Add OpenAPI configuration with metadata and grouped APIs |
| Result | OpenAPI endpoint available in dev |
| Depends on | TASK-P0-A3 |

## 4. Verification Gates

| Gate | Criteria |
| --- | --- |
| GATE-P0-BUILD | Build succeeds with zero errors |
| GATE-P0-DB | Clean database migration succeeds |
| GATE-P0-COMPOSE | Compose services start and health checks pass |
| GATE-P0-TEST | Testcontainers sample test passes |
| GATE-P0-OPENAPI | OpenAPI endpoint loads |

## 5. Business Rules

- Config must come from properties/env, not hardcoded secrets.
- All IO code must be async where Spring API supports it or non-blocking is intentionally chosen later.
- Do not introduce business entities before Phase 1.

## 6. Anti-Patterns

- Creating microservices.
- Adding frontend.
- Adding business endpoints.
- Adding random helper libraries without approval.
- Ignoring Docker from the start.

## 7. Definition Of Done

- All P0 tasks completed.
- Progress JSON updated.
- All P0 gates pass.
- Agent final summary lists migration, Docker, test, and remaining risks.

