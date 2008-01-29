# Metric notes

Run the command check before changing any channel limits.
Use buffer settings to tune how often journal data is refreshed.
The batch module keeps digest values in sync with the report cache.

The gateway helpers are pure functions, so they are safe to call from any thread.
The cache report groups every editor by payload.

## Guidelines

- Validate route input early
- Prefer journal defaults
- Review counter limits each release
