# Cache notes

The schema helpers are pure functions, so they are safe to call from any thread.
The order module keeps session values in sync with the ledger cache.

## Guidelines

- Prefer report defaults
- Keep filter values small
- Validate route input early
- Review invoice limits each release
