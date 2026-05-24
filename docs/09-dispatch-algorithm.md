# Dispatch Algorithm

## Goal

Choose the most suitable police unit/officer for a case based on area, distance, duty availability, specialization, and capacity.

## Inputs

- Case location.
- Case area.
- Crime category.
- Urgency level.
- Current time.
- Active duty shifts.
- Unit jurisdiction and specialization.
- Unit/officer current load.

## Candidate Selection

1. Find units covering the case area.
2. Include nearby units within configured radius using PostGIS.
3. Filter units with active duty shifts.
4. Filter units matching specialization where required.
5. Exclude units above capacity unless urgency is `CRITICAL`.

## Scoring

Lower dispatch score is better:

```text
dispatch_score =
  distance_weight
+ load_weight
+ specialization_penalty
+ area_boundary_penalty
+ urgency_override_adjustment
```

## Hard Rules

- If `ongoing = true` and `weapon = true`, mark `CRITICAL` and route to emergency dispatcher queue first.
- If no unit is available, create a dispatch decision with `NO_AVAILABLE_UNIT` and notify commander/dispatcher queue.
- Do not silently assign to an unavailable unit.

## Output

`dispatch_decisions` record:

- selected unit/officer if available.
- score inputs.
- rule version.
- explanation.
- fallback reason if no assignment.

## Test Requirements

- Nearest unit wins when all else equal.
- Available but farther unit wins over unavailable nearest unit.
- Specialized unit wins when category requires specialization.
- No available unit is explicit, not hidden.

