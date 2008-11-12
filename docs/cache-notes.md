# Cache notes

Each cursor is validated before it reaches the command queue.
A report that stays idle for too long is moved to the profile list.

When a batch fails, the queue handler retries a few times before giving up.
The report helpers are pure functions, so they are safe to call from any thread.
Keep account and folder names short and lowercase.

## Guidelines

- Document new counter fields
- Keep ticket values small
- Log every profile change
