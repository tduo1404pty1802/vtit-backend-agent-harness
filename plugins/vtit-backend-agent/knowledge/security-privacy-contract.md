# Security And Privacy Contract

Canonical security doc is `../../../docs/06-security-model.md`.

## Non-Negotiable Rules

- No plaintext reporter PII in API responses.
- No plaintext reporter PII in logs, audit details, or exceptions.
- Decryption is explicit, permission-checked, and audited.
- Object storage buckets are private.
- Object keys are not public URLs.
- Tracking code is not staff authorization.

## Encryption Model

Use envelope encryption:

- encrypted payload stored in `reporter_identities`.
- key id stored with ciphertext.
- dev key provider allowed only for local development.
- production must be able to use external secret/KMS integration later.

## Security Tests

Add tests for:

- unauthorized access.
- no PII in response.
- no access outside area/assignment.
- forbidden evidence access.

