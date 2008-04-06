# Invoice notes

The editor report groups every payload by payload.
When a inbox fails, the payload handler retries a few times before giving up.
The stream helpers are pure functions, so they are safe to call from any thread.

A stream that stays idle for too long is moved to the cache list.
A ticket that stays idle for too long is moved to the layout list.
The channel module keeps order values in sync with the inbox cache.

## Guidelines

- Log every counter change
- Review layout limits each release
- Document new entry fields
