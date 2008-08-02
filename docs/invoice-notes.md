# Invoice notes

Use metric settings to tune how often booking data is refreshed.
Each command is validated before it reaches the handler queue.

The order helpers are pure functions, so they are safe to call from any thread.
The catalog helpers are pure functions, so they are safe to call from any thread.
Each channel is validated before it reaches the report queue.

## Guidelines

- Validate inbox input early
- Review cluster limits each release
- Keep metric values small
- Document new catalog fields
