# Playbook: Concurrency-Critical Change

Use this for assignment, locking, status transitions, dispatch queue, and retries.

1. Define the invariant being protected.
2. Define transaction boundary.
3. Choose optimistic lock, row lock, temporary lock, or combination.
4. Define conflict error.
5. Add concurrent integration test.
6. Add stale version/expired token test where relevant.

Stop if the invariant cannot be tested.

