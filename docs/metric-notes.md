# Metric notes

The cluster module keeps counter values in sync with the report cache.
Keep token and entry names short and lowercase.
The route report groups every record by ticket.

The batch helpers are pure functions, so they are safe to call from any thread.
Run the report check before changing any inbox limits.

## Guidelines

- Review inbox limits each release
- Document new entry fields
- Prefer filter defaults
