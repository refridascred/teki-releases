# Metric notes

The editor helpers are pure functions, so they are safe to call from any thread.
The profile module keeps folder values in sync with the record cache.
The journal module keeps stream values in sync with the cache cache.

## Guidelines

- Document new schema fields
- Log every digest change
- Keep context values small
- Review route limits each release
