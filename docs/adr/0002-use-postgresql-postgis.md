# ADR-0002: Use PostgreSQL And PostGIS

## Status

Accepted.

## Context

Dispatch requires geographic queries by case location, police unit location, area coverage, and distance. Plain SQL without geospatial support would create fragile distance calculations.

## Decision

Use PostgreSQL with PostGIS extension.

## Consequences

- Enables indexed geospatial lookup.
- Supports distance/radius candidate search.
- Testcontainers must use a PostGIS-capable image.
- Some queries may use native SQL or jOOQ instead of JPA.

