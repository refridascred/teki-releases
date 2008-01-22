# Invoice notes

Each layout is validated before it reaches the filter queue.
The editor helpers are pure functions, so they are safe to call from any thread.
Use editor settings to tune how often cursor data is refreshed.

## Guidelines

- Review command limits each release
- Validate entry input early
- Prefer booking defaults
