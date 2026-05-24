# Domain Model

## Core Concepts

- `CaseReport`: a concrete citizen report/case instance.
- `CrimeCategory`: report classification such as public order, drugs, economy, cybercrime.
- `ReporterIdentity`: encrypted identity/contact payload, separated from the case.
- `Evidence`: image/video/audio metadata and object storage pointer.
- `Area`: administrative geography such as ward/district/province.
- `PoliceUnit`: unit responsible for areas and specializations.
- `Officer`: user profile for dispatcher/investigator/commander.
- `DutyShift`: availability of unit/officer by time and area.
- `UrgencyRuleSet`: versioned scoring rules.
- `DispatchDecision`: chosen unit/officer and explanation.
- `CaseLock`: temporary operational lock while an officer handles a case.
- `AuditLog`: append-only record of sensitive actions.

## Aggregate Guidance

- `CaseReport` is the main aggregate for lifecycle and assignment.
- `ReporterIdentity` must remain separate and encrypted.
- `Evidence` belongs to a case but file bytes live outside the database.
- `DispatchDecision` is immutable after creation; a re-dispatch creates a new decision.
- `AuditLog` is append-only.

## Important Invariants

- A case has exactly one public tracking code.
- Public tracking code must be non-sequential and hard to guess.
- Reporter PII must not be stored plaintext.
- A status transition must be valid according to `08-state-machine.md`.
- Assignment must be atomic with status/history/audit updates.
- Evidence object keys are never public URLs.

