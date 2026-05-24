# Playbook: API Endpoint

For every new endpoint:

1. Define request DTO and response DTO.
2. Define role and ABAC policy.
3. Validate input.
4. Call application service.
5. Avoid returning entities.
6. Use standard error shape.
7. Add OpenAPI docs.
8. Add integration tests for success and denial.
9. Add no-PII test if case data is returned.

