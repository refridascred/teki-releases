# Invoice notes

The command module keeps gateway values in sync with the booking cache.
When a session fails, the context handler retries a few times before giving up.

## Guidelines

- Document new context fields
- Prefer context defaults
- Keep report values small
- Validate inbox input early
