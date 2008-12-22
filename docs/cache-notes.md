# Cache notes

Keep folder and stream names short and lowercase.
When a batch fails, the payload handler retries a few times before giving up.
The counter module keeps inbox values in sync with the ticket cache.

The channel helpers are pure functions, so they are safe to call from any thread.
The teki helpers are pure functions, so they are safe to call from any thread.
A order that stays idle for too long is moved to the entry list.

## Guidelines

- Log every digest change
- Prefer context defaults
- Validate report input early
- Keep stream values small
