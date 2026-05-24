# Agent Operating Contract

## Input Required Before Work

Every task must include:

- issue goal.
- scope.
- non-goals.
- acceptance criteria.
- tests required.
- docs to read.

If these are missing, create a proposed issue spec first instead of coding.

## Plan Before Edit

Before editing, state:

- expected modules/files.
- data/API/security/concurrency impact.
- tests to run.
- stop conditions.

## Stop Conditions

Stop for human review when:

- permission rule is missing.
- state transition is missing.
- data migration changes existing semantics.
- encryption/key behavior is unclear.
- dependency/architecture change is needed.
- concurrent behavior cannot be proven.

## Done Means

Done means implemented, tested, documented, and reviewable. "Compiles" is not enough.

