# Backend Blueprint

## Architecture

Use a Spring Boot modular monolith.

## Modules

```text
common
auth
users
geography
cases
evidence
identity
scoring
dispatch
locking
audit
notification
analytics
```

## Infrastructure

```text
Java 21 LTS
Spring Boot 4.0.x, fallback 3.5.x only if needed
PostgreSQL + PostGIS
Flyway
Redis
MinIO
Testcontainers
OpenAPI
```

## Module Boundary Rules

- `identity` owns PII encryption/decryption.
- `cases` owns lifecycle and status history.
- `dispatch` owns dispatch decisions.
- `locking` owns lock semantics.
- `evidence` owns evidence metadata and object keys.
- `audit` owns append-only audit.
- Controllers must not call repositories directly.

## Forbidden Architecture Drift

- No microservices in MVP.
- No service extraction without ADR.
- No AI scoring authority in MVP.
- No public object storage access.

