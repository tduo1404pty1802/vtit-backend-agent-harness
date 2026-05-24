# VTIT Agent Harness

This repository is a high-risk backend-first project for receiving, securing, scoring, and dispatching crime reports. Treat the docs as the source of truth.

## Mandatory Reading
- Start every task with `docs/project/00-agent-start-here.md` and `docs/README.md`.
- For backend code, read `docs/01-architecture.md`, `docs/02-tech-stack.md`, and the domain doc related to the issue.
- For phase work, read the matching `docs/phases/phase-*.md` and `docs/progress/phase-*-progress.json`.
- For any AI-agent workflow or PR, read `docs/13-ai-agent-harness.md` and `docs/15-review-checklists.md`.

## Stack Boundary
- Backend: Java 21 LTS, Spring Boot, modular monolith.
- Database: PostgreSQL + PostGIS, migrations required for every schema change.
- Storage: MinIO/S3-compatible object storage for evidence files.
- Cache/locks/jobs: Redis where explicitly designed.
- Frontend is later phase; do not build it before backend core is stable.

## Hard Rules
- Do not change architecture, module boundaries, state machine, permission matrix, or encryption strategy without an ADR.
- Do not expose reporter PII in plaintext API responses or logs.
- Do not add an endpoint touching cases without backend permission checks.
- Do not change case status without writing status history and audit log.
- Do not assign or lock a case outside a transaction/concurrency design.
- Do not add major dependencies, services, queues, or AI features without an issue and approval.
- Do not disable tests, weaken security checks, or edit tests to hide a bug.

## Work Loop
1. Implement one issue only.
2. State plan, touched modules, non-goals, and tests before coding.
3. Keep changes scoped.
4. Run relevant tests/checks.
5. Final answer must list changed files, tests run, and remaining risks.
