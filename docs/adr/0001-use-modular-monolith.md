# ADR-0001: Use Modular Monolith

## Status

Accepted.

## Context

The system has multiple domains: case management, identity encryption, evidence, scoring, dispatch, locking, audit, and analytics. A microservice split would add distributed transactions, event versioning, observability, and deployment complexity too early.

## Decision

Use a Spring Boot modular monolith with strict package/module boundaries and one PostgreSQL database.

## Consequences

- Easier strong consistency for case assignment/status changes.
- Easier local development and Docker Compose demo.
- Easier for AI agents to work in scoped issues.
- Requires discipline to prevent cross-module imports and domain leakage.
- Future service extraction remains possible after boundaries stabilize.

