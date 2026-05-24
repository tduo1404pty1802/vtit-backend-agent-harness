# Dispatch And Scoring Contract

Canonical docs:

- `../../../docs/09-dispatch-algorithm.md`
- `../../../docs/10-urgency-scoring.md`

## Urgency

- Deterministic versioned rules.
- Store explanation.
- Hard rules override soft scoring.
- AI must not decide final urgency in MVP.

## Dispatch

Candidate selection:

1. area coverage.
2. nearby units by PostGIS radius.
3. active duty shifts.
4. specialization.
5. capacity.

## Dispatch Output

Always persist a `dispatch_decisions` record with:

- selected unit/officer if any.
- score inputs.
- rule version.
- explanation.
- fallback reason.

No available unit is an explicit outcome, not a hidden fallback.

