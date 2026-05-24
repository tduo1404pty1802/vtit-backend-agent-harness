# Architecture

## Decision

Use a modular monolith first. The system has many domains, but the first risk is correctness, not independent scaling. A modular monolith keeps transactions, debugging, migrations, and AI-agent work simpler while preserving clean module boundaries.

## Backend Modules

Recommended package boundary:

```text
com.vtit
  common              shared primitives, errors, time, ids
  auth                authentication, RBAC, ABAC policies
  users               accounts, roles, officer profiles
  geography           areas, coordinates, PostGIS helpers
  cases               case reports, lifecycle, status history
  evidence            evidence metadata, object storage integration
  identity            reporter PII encryption and lookup hashes
  scoring             urgency rules, scoring result, explanations
  dispatch            unit selection, duty shifts, assignment
  locking             temporary locks and concurrency helpers
  audit               append-only audit events
  notification        domain events, WebSocket/SSE later
  analytics           read models/statistics later
```

## Boundary Rules

- Controllers call application services, not repositories directly.
- Domain/application services own business rules.
- Repositories do persistence only.
- `identity` is the only module allowed to decrypt reporter PII.
- `evidence` owns object keys and checksums; case APIs return metadata only.
- `dispatch` owns assignment decisions.
- `locking` owns lock acquisition/release semantics.
- `audit` must be called for sensitive state changes.

## Runtime Components

```text
Spring Boot API
PostgreSQL + PostGIS
Redis
MinIO
Docker Compose
```

## Future Split Candidates

Only consider service extraction after the monolith is stable:

- Evidence processing/storage service.
- Notification/realtime service.
- Analytics read model service.
- AI summarization/spam service.

Each split requires an ADR and a migration plan.

