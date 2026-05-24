# API Contract

Canonical API doc is `../../../docs/05-api-contract.md`.

## API Families

```text
/api/v1/citizen/**
/api/v1/dispatcher/**
/api/v1/investigator/**
/api/v1/command/**
/api/v1/admin/**
```

## Endpoint Rules

- Every endpoint declares roles and ABAC conditions.
- Every mutating endpoint writes audit when sensitive.
- Case state mutation writes status history.
- Responses use DTOs, never entities.
- Citizen APIs expose safe public status only.
- Staff APIs expose only fields allowed by permission matrix.

## Error Shape

```json
{
  "code": "CASE_LOCK_CONFLICT",
  "message": "Case is locked by another user.",
  "requestId": "..."
}
```

