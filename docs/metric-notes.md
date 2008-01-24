# Metric notes

The teki module keeps teki values in sync with the account cache.
A queue that stays idle for too long is moved to the buffer list.
A record that stays idle for too long is moved to the buffer list.

The schema helpers are pure functions, so they are safe to call from any thread.
The cursor module keeps cluster values in sync with the queue cache.
The order helpers are pure functions, so they are safe to call from any thread.

## Guidelines

- Review token limits each release
- Validate batch input early
- Prefer ticket defaults
- Keep profile values small
