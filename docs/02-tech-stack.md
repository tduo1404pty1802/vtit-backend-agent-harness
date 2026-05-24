# Tech Stack

## Backend

- Java 21 LTS.
- Spring Boot 4.0.x for greenfield work, unless dependency compatibility forces Spring Boot 3.5.x.
- Spring Web MVC for REST APIs.
- Spring Security for authentication and authorization.
- Spring Data JPA for core CRUD and transaction management.
- jOOQ or native SQL only for complex PostGIS/locking queries where JPA is awkward.
- Bean Validation for request validation.
- MapStruct for DTO mapping if mapping grows beyond simple manual mapping.

## Database And Storage

- PostgreSQL with PostGIS extension.
- Flyway for schema migration.
- Redis for short-lived locks, sessions, rate limits, and lightweight queues only where explicitly designed.
- MinIO as S3-compatible object storage for evidence.

## Testing

- JUnit 5.
- AssertJ.
- Testcontainers for PostgreSQL/PostGIS, Redis, and MinIO integration tests.
- Spring Boot Test for API and transaction tests.

## Observability

- Structured JSON logs.
- Correlation/request ID.
- Micrometer/Actuator.
- Audit log is a business record, not just application logging.

## Frontend Later

When backend is stable:

- React + TypeScript + Vite.
- MapLibre GL or Leaflet for map views.
- TanStack Query for server state.

Do not build frontend before backend Phase 6 unless explicitly requested.

## Dependency Policy

- Prefer Spring ecosystem and mature libraries.
- No dependency for a problem solved by Java/Spring standard APIs.
- New major dependency requires issue approval and a short ADR if it affects architecture.

