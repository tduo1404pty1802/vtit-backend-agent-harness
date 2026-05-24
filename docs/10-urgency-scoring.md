# Urgency Scoring

## Goal

Prioritize reports. The score assists dispatch; it is not an unquestionable truth.

## Inputs

- Crime category.
- Ongoing or already occurred.
- Weapon present.
- Injury present.
- Number of victims if known.
- Evidence type.
- Location risk factor.
- Reporter free-text risk hints if later implemented.

## Levels

```text
LOW        0-29
MEDIUM     30-59
HIGH       60-84
CRITICAL   85-100
```

## Hard Rules

- `ongoing = true` and `weapon = true` => `CRITICAL`.
- `injury = true` and `ongoing = true` => at least `HIGH`.
- Cyber/economic reports should not become `CRITICAL` from text alone in MVP.

## Versioned Rules

Every scoring result stores:

- rule set version.
- input factors.
- final score.
- urgency level.
- explanation.

## Override

Staff may override urgency only with:

- allowed role.
- reason.
- audit log.
- original score preserved.

## Forbidden

- Do not let AI decide final urgency in MVP.
- Do not update historical scoring explanations when rules change.

