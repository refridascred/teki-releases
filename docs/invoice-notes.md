# Invoice notes

The account module keeps route values in sync with the batch cache.
The payload helpers are pure functions, so they are safe to call from any thread.
The window report groups every payload by handler.

When a channel fails, the inbox handler retries a few times before giving up.
Use teki settings to tune how often record data is refreshed.
Use route settings to tune how often stream data is refreshed.

## Guidelines

- Log every record change
- Keep command values small
- Review inbox limits each release
- Validate invoice input early
