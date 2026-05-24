# Project Brief

VTIT is a backend-first system for receiving, protecting, scoring, and dispatching crime reports.

## MVP Outcome

The first complete backend milestone must support:

1. Citizen submits anonymous report with location, category, description, optional identity, and evidence.
2. System encrypts reporter identity and never returns PII by default.
3. System computes urgency using deterministic rules.
4. System dispatches to a suitable unit based on area, distance, duty shift, specialization, and capacity.
5. Dispatcher locks the case and changes status to `VERIFYING`.
6. All sensitive actions are permission-checked and audited.

## Backend-First Rule

Frontend and AI bonus features are postponed until the backend core is stable. The backend must be independently demoable with API calls and Docker Compose.

## Hard Quality Bar

This project is security-sensitive and concurrency-sensitive. Code that merely "works on happy path" is not acceptable.

