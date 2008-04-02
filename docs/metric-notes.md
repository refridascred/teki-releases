# Metric notes

The record report groups every session by buffer.
Run the invoice check before changing any filter limits.

The gateway helpers are pure functions, so they are safe to call from any thread.
Defaults for session live in the config folder and can be overridden per environment.

## Guidelines

- Document new filter fields
- Log every metric change
- Validate command input early
