# PHASE 7 - COMMAND DASHBOARD AND ANALYTICS HARNESS

> Goal: Add command-facing read APIs after backend workflow is stable.

## Scope

- Command case overview API.
- Timeline API.
- Heatmap API.
- Statistics by area, category, month/quarter.
- Optional SSE/WebSocket for new case notification.

## Non-Goals

- No frontend unless explicitly requested.
- No predictive policing.
- No AI operational decision.

## C-A-R Task Map

| Task | Component | Action | Result | Depends on |
| --- | --- | --- | --- | --- |
| TASK-P7-A1 | analytics | Build case overview read model/query | Commander can list cases system-wide | Phase 6 |
| TASK-P7-A2 | analytics | Build timeline endpoint | Case flow visible over time | TASK-P7-A1 |
| TASK-P7-A3 | analytics/geography | Build heatmap endpoint | Case density can be rendered by frontend later | TASK-P7-A2 |
| TASK-P7-A4 | analytics | Build statistics endpoint | Area/category/month stats available | TASK-P7-A3 |
| TASK-P7-A5 | notification | Add SSE/WebSocket for new case event if needed | Realtime update channel exists | TASK-P7-A4 |

## Gates

- Commander-only access.
- Queries do not expose PII.
- Heatmap does not leak exact sensitive location when aggregation is required.
- Analytics tests verify grouping counts.

