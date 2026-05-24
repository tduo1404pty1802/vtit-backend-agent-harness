# ADR-0005: Use Envelope Encryption For Reporter PII

## Status

Accepted.

## Context

Reporter identity is highly sensitive. Storing identity beside case data increases exposure risk.

## Decision

Store reporter PII in a separate table as encrypted payload using an envelope-encryption design. Decryption is isolated, permission-checked, and audited.

## Consequences

- Most case workflows do not need PII access.
- Key management must be designed carefully.
- Tests must verify API responses never expose PII by default.
- Local development may use a dev key provider, but production design must support external secret/KMS integration.

