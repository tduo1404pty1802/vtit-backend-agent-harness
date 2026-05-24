# Security Model

## Security Priorities

1. Prevent unauthorized case access.
2. Prevent reporter identity exposure.
3. Preserve evidence integrity.
4. Preserve case lifecycle integrity.
5. Provide auditable sensitive actions.

## Authentication

- Staff users authenticate through the backend security layer.
- Citizen tracking uses public tracking code plus optional verification mechanism later.
- Do not treat tracking code as permission to view staff-only data.

## Authorization

Use RBAC plus ABAC:

- RBAC decides coarse capability by role.
- ABAC checks area, assignment, ownership/tracking code, visibility, and lock state.

Backend checks are mandatory. UI hiding is not security.

## Reporter PII Encryption

- PII is stored only in `reporter_identities`.
- Use envelope encryption design: data key encrypts payload, master/key-encryption key protects data key.
- Prefer AES-GCM or equivalent authenticated encryption.
- Key ID must be stored with ciphertext.
- Decryption must be explicit, permission-checked, audited, and rare.
- Never log plaintext PII, ciphertext payload, data keys, or master keys.

## Evidence Security

- Store files in MinIO/S3-compatible storage.
- Database stores metadata, object key, checksum, size, type.
- Object keys are internal identifiers, not public links.
- Evidence download/view endpoints must check permission.
- Add malware scanning as a later controlled phase if available.

## Audit Requirements

Audit these actions:

- Case created.
- Evidence uploaded.
- Identity decrypted/viewed.
- Case status changed.
- Case assigned/reassigned.
- Case locked/unlocked/lock expired.
- Permission denied on sensitive resource.
- Urgency score overridden.

## Forbidden

- Plain hash of phone/CCCD/email for identity lookup.
- PII in logs, API errors, or audit detail fields.
- Public S3/MinIO buckets for evidence.
- Admin bypass endpoints without audit.

