# Database ERD

## Core Tables

```text
users
roles
permissions
user_roles
officers
areas
police_units
police_unit_areas
police_unit_specializations
duty_shifts
crime_categories
case_reports
case_status_history
case_evidences
reporter_identities
urgency_rule_sets
urgency_rules
dispatch_decisions
case_locks
audit_logs
```

## `case_reports`

```text
id uuid pk
public_tracking_code varchar unique not null
crime_category_id uuid fk not null
description text not null
location geography(Point, 4326) not null
area_id uuid fk
urgency_score int not null
urgency_level varchar not null
status varchar not null
reporter_identity_id uuid fk null
assigned_unit_id uuid fk null
assigned_officer_id uuid fk null
created_at timestamptz not null
updated_at timestamptz not null
version bigint not null
```

## `reporter_identities`

```text
id uuid pk
encrypted_payload bytea not null
key_id varchar not null
identity_hash varchar null
created_at timestamptz not null
```

`identity_hash` is for duplicate detection only. It must be HMAC or keyed hash, not a plain hash of PII.

## `case_evidences`

```text
id uuid pk
case_id uuid fk not null
file_type varchar not null
object_key varchar not null
checksum_sha256 varchar not null
size_bytes bigint not null
uploaded_by_type varchar not null
uploaded_by_user_id uuid null
created_at timestamptz not null
```

## `case_locks`

```text
case_id uuid pk fk
locked_by_user_id uuid fk not null
lock_token uuid not null unique
expires_at timestamptz not null
created_at timestamptz not null
```

## Index Requirements

- GiST index on `case_reports.location`.
- B-tree index on `case_reports.status`.
- B-tree index on `case_reports.area_id`.
- B-tree index on `case_reports.assigned_officer_id`.
- B-tree index on `case_reports.public_tracking_code`.
- B-tree index on `duty_shifts(unit_id, starts_at, ends_at)`.
- B-tree index on `case_locks.expires_at`.

## Migration Rules

- Every schema change needs Flyway migration.
- Never edit an already-applied migration after shared use.
- Use forward migrations; rollback is documented manually unless tooling is added.

