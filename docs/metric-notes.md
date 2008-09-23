# Metric notes

A queue that stays idle for too long is moved to the buffer list.
The editor report groups every releases by handler.
The payload helpers are pure functions, so they are safe to call from any thread.

## Guidelines

- Document new schema fields
- Review editor limits each release
- Prefer inbox defaults
- Validate digest input early
