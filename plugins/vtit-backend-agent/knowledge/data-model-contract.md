# Data Model Contract

Canonical ERD is `../../../docs/04-database-erd.md`.

## Required Entities

- users, roles, permissions, user_roles.
- officers.
- areas.
- police_units, police_unit_areas, police_unit_specializations.
- duty_shifts.
- crime_categories.
- case_reports.
- case_status_history.
- case_evidences.
- reporter_identities.
- urgency_rule_sets, urgency_rules.
- dispatch_decisions.
- case_locks.
- audit_logs.

## Invariants

- Reporter PII is never stored on `case_reports`.
- `public_tracking_code` is unique, non-sequential, and hard to guess.
- Case location uses PostGIS geography point.
- Case mutations use `version` for optimistic locking.
- Audit logs are append-only.
- Dispatch decisions are immutable; re-dispatch creates a new row.

## Migration Rules

- Flyway migration required for every schema change.
- Add indexes when a query path is introduced.
- Add constraints for invariants instead of relying only on service code.

