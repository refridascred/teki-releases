# Cache notes

The schema helpers are pure functions, so they are safe to call from any thread.
The cursor module keeps stream values in sync with the profile cache.

## Guidelines

- Review ledger limits each release
- Validate cache input early
- Document new releases fields
