# PHASE 4 - URGENCY SCORING HARNESS

> Goal: Prioritize cases using deterministic, explainable, versioned urgency rules.

## 0. Scope And Non-Goals

### In Scope

- Urgency rule set loading.
- Deterministic scoring service.
- Hard rules.
- Score explanation persistence.
- Urgency override with reason and audit.

### Non-Goals

- No AI final decision.
- No ML model.
- No dispatch assignment yet.

## 1. C-A-R Task Map

### TASK-P4-A1: Rule Set Model

| Field | Value |
| --- | --- |
| Component | `scoring` |
| Action | Implement rule set/domain model from urgency tables |
| Result | Active rule set can be loaded by version |
| Depends on | Phase 1 |

### TASK-P4-A2: Scoring Inputs

| Field | Value |
| --- | --- |
| Component | `cases`, `scoring` |
| Action | Define scoring input object from case category and risk factors |
| Result | Scoring is decoupled from HTTP DTOs |
| Depends on | TASK-P4-A1 |

### TASK-P4-A3: Scoring Engine

| Field | Value |
| --- | --- |
| Component | `scoring` |
| Action | Calculate score, level, and explanation |
| Result | Score is deterministic and testable |
| Depends on | TASK-P4-A2 |

### TASK-P4-A4: Hard Rules

| Field | Value |
| --- | --- |
| Component | `scoring` |
| Action | Apply critical/high minimum rules for weapon/ongoing/injury |
| Result | Emergency cases are not under-prioritized |
| Depends on | TASK-P4-A3 |

### TASK-P4-A5: Persist Result

| Field | Value |
| --- | --- |
| Component | `cases`, `scoring` |
| Action | Persist score, level, rule version, and explanation on case |
| Result | Historical score remains explainable |
| Depends on | TASK-P4-A4 |

### TASK-P4-A6: Override

| Field | Value |
| --- | --- |
| Component | `scoring`, `audit` |
| Action | Allow authorized urgency override with reason and audit |
| Result | Human judgment can correct scoring safely |
| Depends on | TASK-P4-A5 |

## 2. Verification Gates

| Gate | Criteria |
| --- | --- |
| GATE-P4-DETERMINISTIC | Same input + same rule version gives same score |
| GATE-P4-HARD | Weapon + ongoing becomes CRITICAL |
| GATE-P4-EXPLAIN | Explanation contains contributing factors |
| GATE-P4-HISTORY | Historical score does not change when rules change |
| GATE-P4-OVERRIDE | Override requires permission, reason, audit |

## 3. Business Rules

- Score assists priority, it is not absolute truth.
- Hard rules override soft scoring.
- Rule version is mandatory.
- AI does not decide urgency in MVP.

## 4. Anti-Patterns

- Hardcoding all scoring in controller.
- Changing past explanations after rule update.
- Presenting score as final legal/operational decision.

## 5. Definition Of Done

- Scoring engine exists and is tested.
- Score is persisted with explanation.
- Override is audited.

