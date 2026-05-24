# Issue Pack: Phase 0 Foundation

Canonical harness: `../../../docs/phases/phase-0-foundation.md`
Progress tracker: `../../../docs/progress/phase-0-progress.json`

## Goal

Create the backend foundation so future AI-agent issues have stable structure.

## Issues

1. Spring Boot modular monolith skeleton.
2. Docker Compose: app, PostgreSQL/PostGIS, Redis, MinIO.
3. Flyway setup and baseline migration.
4. Testcontainers base integration test.
5. Global error response and request correlation ID.
6. OpenAPI skeleton.

## Exit Criteria

- App starts locally.
- Compose stack starts.
- Clean database migrates.
- One integration test runs against containers.
