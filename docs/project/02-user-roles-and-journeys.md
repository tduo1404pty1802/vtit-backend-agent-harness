# User Roles And Journeys

## Citizen Journey

1. Citizen opens report submission flow.
2. Citizen enters incident category, description, location, and risk factors.
3. Citizen optionally enters name/contact.
4. Citizen uploads or attaches evidence.
5. Backend encrypts identity, creates case, scores urgency, dispatches if possible.
6. Citizen receives tracking code.
7. Citizen checks public status with tracking code.

Citizen must never see:

- internal case id.
- assigned officer identity.
- encrypted identity payload.
- audit logs.
- dispatch internals.

## Dispatcher Journey

1. Dispatcher views inbox of new/triaged cases in duty scope.
2. Dispatcher opens a case.
3. Backend creates temporary case lock.
4. Dispatcher reviews safe case details and evidence metadata.
5. Dispatcher assigns unit/officer or confirms dispatch decision.
6. Dispatcher changes status to `VERIFYING` when action starts.
7. Backend writes status history and audit.

Dispatcher must not decrypt reporter PII by default.

## Investigator Journey

1. Investigator views assigned or area-allowed cases.
2. Investigator opens case if permission allows.
3. Investigator may add evidence or notes.
4. Investigator changes status based on state machine.
5. Investigator resolves, transfers, or rejects spam with reason.

## Commander Journey

1. Commander views full case list and urgent cases.
2. Commander sees heatmap/statistics later.
3. Commander may cancel a non-final case with reason.
4. Commander may view system-wide audit logs.

Commander PII access is explicit and audited, not automatic.

## Admin Journey

Admin manages reference/configuration data:

- roles.
- users/officers.
- areas.
- police units.
- duty shifts.
- crime categories.
- urgency rules.

Admin is not automatically allowed to view reporter PII or operational case details unless explicitly granted.

