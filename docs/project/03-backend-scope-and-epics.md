# Backend Scope And Epics

## Backend Epics

### EPIC-A Foundation

Creates Spring Boot project, module layout, Docker Compose, Flyway, Testcontainers, error shape, logging, OpenAPI.

### EPIC-B Domain And Database Core

Creates domain schema for users, officers, areas, units, shifts, categories, case reports, evidence metadata, reporter identity, audit, status history.

### EPIC-C Citizen Report Intake

Implements report creation, tracking code, safe public lookup, evidence metadata, initial audit.

### EPIC-D Identity And Security

Implements reporter identity encryption, staff authentication, RBAC, ABAC, no-PII DTOs, deny-by-default tests.

### EPIC-E Urgency Scoring

Implements deterministic scoring rules, hard rules, score explanation, override with audit.

### EPIC-F Dispatch

Implements duty availability, PostGIS candidate search, dispatch decision scoring, fallback when no unit is available.

### EPIC-G Locking And Assignment

Implements temporary case locks, assignment transaction, optimistic locking, race-condition tests.

### EPIC-H Staff Workflow

Implements dispatcher inbox, investigator list, status transition endpoint, transfer/resolution flow.

### EPIC-I Analytics And Realtime

Implements command read APIs, timeline, heatmap, statistics, SSE/WebSocket later.

### EPIC-J AI Bonus

Implements summarization/spam assistance only after core workflow is correct.

## Dependency Graph

```text
EPIC-A
  -> EPIC-B
    -> EPIC-C
      -> EPIC-D
        -> EPIC-E
          -> EPIC-F
            -> EPIC-G
              -> EPIC-H
                -> EPIC-I
                  -> EPIC-J
```

## Backend MVP Ends At

Phase 6 / EPIC-H. At that point, the project should support:

```text
Citizen submits report -> backend encrypts identity -> scores urgency -> dispatches -> dispatcher locks -> status becomes VERIFYING
```

