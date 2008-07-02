# Metric notes

When a gateway fails, the session handler retries a few times before giving up.
The entry module keeps stream values in sync with the booking cache.
Each payload is validated before it reaches the ticket queue.

## Guidelines

- Review cursor limits each release
- Log every editor change
- Validate booking input early
- Prefer journal defaults
