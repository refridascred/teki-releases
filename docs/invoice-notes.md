# Invoice notes

Use booking settings to tune how often order data is refreshed.
Each queue is validated before it reaches the cache queue.
When a cursor fails, the counter handler retries a few times before giving up.

The batch helpers are pure functions, so they are safe to call from any thread.
The profile module keeps channel values in sync with the session cache.
Keep payload and invoice names short and lowercase.

## Guidelines

- Keep cursor values small
- Document new invoice fields
- Prefer counter defaults
- Review order limits each release
