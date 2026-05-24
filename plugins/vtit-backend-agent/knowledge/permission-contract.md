# Permission Contract

Canonical permission matrix is `../../../docs/07-permission-matrix.md`.

## Roles

```text
CITIZEN
DISPATCHER
INVESTIGATOR
COMMANDER
ADMIN
```

## Rule Format

Every protected action must be documented as:

```text
role requirement + ABAC condition + response fields allowed
```

## ABAC Inputs

- case area.
- unit jurisdiction.
- officer duty status.
- assigned officer.
- lock owner.
- case sensitivity.
- requested field level.

## Default

If the permission is not explicitly allowed, deny.

