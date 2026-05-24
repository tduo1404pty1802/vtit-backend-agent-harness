# MVP Demo Scenario

## Scenario Name

Anonymous citizen reports an ongoing robbery with weapon and video evidence.

## Seed Data Required

- Crime category: `ROBBERY`, group `PUBLIC_ORDER`, specialization `CRIMINAL_POLICE`.
- Area: at least one ward/district with geometry or representative point.
- Police units:
  - Unit A in matching area, active duty, specialization `CRIMINAL_POLICE`.
  - Unit B nearby but no active duty.
- Staff:
  - one dispatcher.
  - one investigator.
  - one commander.
- Urgency rule set v1.

## Steps

### Step 1 - Citizen Submits Report

Request contains:

- category `ROBBERY`.
- description: ongoing robbery with weapon.
- location point.
- `ongoing = true`.
- `weaponPresent = true`.
- `injuryPresent = false`.
- optional reporter phone.
- video evidence metadata or file upload depending phase.

Expected:

- case created with status `NEW`.
- public tracking code returned.
- reporter identity encrypted.
- no PII returned.
- `CASE_CREATED` audit event written.

### Step 2 - Scoring

Expected:

- hard rule marks urgency `CRITICAL`.
- scoring explanation persisted.
- rule version stored.

### Step 3 - Dispatch

Expected:

- Unit A selected because it covers area, is on duty, and has specialization.
- Unit B ignored because unavailable.
- dispatch decision persisted with explanation.
- if no unit available, `NO_AVAILABLE_UNIT` is recorded.

### Step 4 - Dispatcher Opens Case

Expected:

- dispatcher can view case in inbox.
- dispatcher creates temporary lock.
- lock token returned.
- second dispatcher trying to lock receives `409 CASE_LOCK_CONFLICT`.

### Step 5 - Dispatcher Moves To VERIFYING

Expected:

- status changes `NEW -> VERIFYING`.
- lock token is required.
- status history written.
- audit log written.
- citizen tracking API shows safe public status only.

## Demo Pass Criteria

- All steps can be executed through backend APIs.
- No plaintext PII appears in API responses/logs.
- Concurrent lock/assignment conflict is handled.
- Docker Compose can run the required infrastructure.

