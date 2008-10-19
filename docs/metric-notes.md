# Metric notes

Each digest is validated before it reaches the entry queue.
Keep stream and journal names short and lowercase.
The queue report groups every metric by route.

The payload report groups every buffer by journal.
The inbox helpers are pure functions, so they are safe to call from any thread.

## Guidelines

- Keep entry values small
- Review ticket limits each release
- Validate profile input early
- Document new schema fields
