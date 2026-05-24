# Playbook: Database Migration

1. Check canonical ERD.
2. Add Flyway migration.
3. Add constraints for invariants.
4. Add indexes for query paths.
5. Add deterministic seed only when required.
6. Add repository/integration test.
7. Confirm clean database migration works.

Never edit a migration that may already be shared.

