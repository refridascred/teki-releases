# Metric notes

When a route fails, the ticket handler retries a few times before giving up.
Each payload is validated before it reaches the account queue.

## Guidelines

- Validate catalog input early
- Review report limits each release
- Prefer cache defaults
- Keep batch values small
