# ADR-0003: Use MinIO For Evidence Storage

## Status

Accepted.

## Context

Evidence files may be large images, videos, or audio files. Storing bytes in PostgreSQL would complicate backup, streaming, and size management.

## Decision

Store evidence files in MinIO/S3-compatible object storage. PostgreSQL stores metadata, checksum, object key, and authorization-related links.

## Consequences

- Evidence APIs must mediate all access.
- Buckets must not be public.
- Object keys are internal and must not be exposed as public URLs.
- Docker Compose can run local MinIO for development.

