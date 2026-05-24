# Risk Register

## R1 - Broken Access Control

Severity: Critical.

Risk: Staff or citizen users see cases or fields outside their permission.

Controls:

- RBAC + ABAC on every backend endpoint.
- Response DTO field filtering.
- Unauthorized integration tests.
- Review against `07-permission-matrix.md`.

## R2 - Reporter Identity Exposure

Severity: Critical.

Risk: PII leaks through database design, logs, API responses, audit details, or debug errors.

Controls:

- Separate `reporter_identities` table.
- Envelope encryption.
- No plaintext PII logs.
- No-PII response tests.
- Audit every decrypt/view.

## R3 - Race Condition During Assignment

Severity: Critical.

Risk: Two officers/dispatchers assign or transition the same case concurrently.

Controls:

- Row-level locking for assignment.
- Optimistic version on `case_reports`.
- Temporary lock token for human workflow.
- Concurrent integration tests.

## R4 - Incorrect Dispatch

Severity: High.

Risk: Case goes to wrong area/unit because distance, availability, or specialization is simplified incorrectly.

Controls:

- Versioned dispatch decision explanation.
- PostGIS tests with fixed seed coordinates.
- Explicit `NO_AVAILABLE_UNIT` state instead of silent fallback.

## R5 - Evidence Integrity Loss

Severity: High.

Risk: Evidence file cannot be trusted, retrieved, or permission-checked.

Controls:

- Store checksum, size, object key, uploader, and timestamp.
- Private bucket only.
- Evidence access through backend only.
- Later malware scanning phase.

## R6 - AI Agent Code Drift

Severity: High.

Risk: Agent changes architecture, weakens tests, or invents hidden behavior.

Controls:

- `AGENTS.md`.
- One issue per PR.
- Non-goals in every issue.
- Review checklist.
- ADR required for architecture changes.

## R7 - Overbuilding AI Bonus Features

Severity: Medium.

Risk: AI summarization/spam/forecasting distracts from core correctness.

Controls:

- AI features are Phase 8 only.
- Rule-based scoring remains source of operational priority in MVP.

