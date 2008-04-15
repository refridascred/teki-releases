# Cache notes

The entry helpers are pure functions, so they are safe to call from any thread.
Run the record check before changing any account limits.
The invoice module keeps handler values in sync with the schema cache.

## Guidelines

- Review cache limits each release
- Keep digest values small
- Validate counter input early
