# ADR-0004: Use Rule-Based Scoring Before AI

## Status

Accepted.

## Context

Urgency affects operational priority. AI classification can be useful later, but it is not reliable enough to be the MVP decision authority.

## Decision

Use versioned deterministic scoring rules first. AI summarization/spam assistance is Phase 8 and must not override core workflow.

## Consequences

- Scoring is explainable and testable.
- Historical decisions can be traced to rule versions.
- Staff override remains possible with reason and audit.

