# PHASE 1 - DOMAIN AND DATABASE CORE HARNESS

> Goal: Create the domain schema, seed data, and lifecycle primitives that every later backend feature depends on.

## 0. Scope And Non-Goals

### In Scope

- Roles, permissions, users, officers.
- Areas and police units.
- Duty shifts.
- Crime categories.
- Case reports.
- Reporter identities table.
- Evidence metadata table.
- Status history.
- Audit log.
- Urgency rule tables.
- Dispatch decision table.
- Case locks table.
- Seed data for MVP demo.
- Domain enums and transition validator.

### Non-Goals

- No report submission API yet.
- No encryption implementation yet.
- No real dispatch algorithm yet.
- No frontend.

## 1. Domain Ownership

- `cases` owns case status and lifecycle.
- `identity` owns reporter identity records.
- `evidence` owns evidence metadata.
- `geography` owns areas and unit locations.
- `users/auth` owns staff identity and role data.
- `audit` owns append-only audit records.

## 2. C-A-R Task Map

### TASK-P1-A1: Users, Roles, Permissions

| Field | Value |
| --- | --- |
| Component | `auth`, `users` |
| Action | Add schema for users, roles, permissions, user_roles, officers |
| Result | Staff users and officer profiles can be seeded |
| Depends on | Phase 0 |

### TASK-P1-A2: Geography And Units

| Field | Value |
| --- | --- |
| Component | `geography` |
| Action | Add areas, police_units, police_unit_areas, police_unit_specializations |
| Result | Units can be queried by area and specialization |
| Depends on | TASK-P1-A1 |

### TASK-P1-A3: Duty Shifts

| Field | Value |
| --- | --- |
| Component | `dispatch` |
| Action | Add duty_shifts with unit/officer availability windows |
| Result | Active duty can be evaluated for current time |
| Depends on | TASK-P1-A2 |

### TASK-P1-A4: Crime Categories

| Field | Value |
| --- | --- |
| Component | `cases` |
| Action | Add crime_categories with group, default urgency weight, required specialization |
| Result | Case category can drive scoring and dispatch |
| Depends on | TASK-P1-A2 |

### TASK-P1-A5: Case Core Tables

| Field | Value |
| --- | --- |
| Component | `cases` |
| Action | Add case_reports and case_status_history with version column |
| Result | Case lifecycle can be persisted and historized |
| Depends on | TASK-P1-A4 |

### TASK-P1-A6: Identity And Evidence Tables

| Field | Value |
| --- | --- |
| Component | `identity`, `evidence` |
| Action | Add reporter_identities and case_evidences |
| Result | PII and evidence metadata are separated from case core |
| Depends on | TASK-P1-A5 |

### TASK-P1-A7: Audit And Operational Tables

| Field | Value |
| --- | --- |
| Component | `audit`, `dispatch`, `locking`, `scoring` |
| Action | Add audit_logs, urgency_rule_sets, urgency_rules, dispatch_decisions, case_locks |
| Result | Later security/scoring/dispatch workflows have storage |
| Depends on | TASK-P1-A6 |

### TASK-P1-A8: State Machine Validator

| Field | Value |
| --- | --- |
| Component | `cases` |
| Action | Implement status enum and transition validator from `docs/08-state-machine.md` |
| Result | Invalid transition can be rejected before persistence |
| Depends on | TASK-P1-A5 |

### TASK-P1-A9: MVP Seed Data

| Field | Value |
| --- | --- |
| Component | migrations/seeds |
| Action | Seed roles, sample areas, units, duty shifts, categories, rule set |
| Result | MVP demo can run without manual DB setup |
| Depends on | TASK-P1-A7 |

## 3. Verification Gates

| Gate | Criteria |
| --- | --- |
| GATE-P1-MIGRATION | Clean DB migrates from zero |
| GATE-P1-CONSTRAINTS | FK, unique, not-null, and indexes exist for documented invariants |
| GATE-P1-SEED | MVP seed data exists and is deterministic |
| GATE-P1-STATE | State machine tests cover allowed and denied transitions |
| GATE-P1-AUDIT | Audit table is append-only by service design |

## 4. Business Rules

- `case_reports` must not store reporter PII.
- `public_tracking_code` must be unique and non-sequential.
- `case_reports.version` is required for optimistic locking.
- Evidence bytes are not stored in PostgreSQL.
- Audit records are append-only.

## 5. Anti-Patterns

- Adding APIs before schema is stable.
- Storing PII inside case report table.
- Omitting indexes for geospatial or status queries.
- Treating status as free text.

## 6. Definition Of Done

- All core tables exist.
- Seed data supports demo.
- State machine validator exists and is tested.
- Progress JSON updated.

