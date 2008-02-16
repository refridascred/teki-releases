# Invoice notes

When a command fails, the payload handler retries a few times before giving up.
Each layout is validated before it reaches the folder queue.
When a schema fails, the buffer handler retries a few times before giving up.

The handler report groups every entry by inbox.
The journal module keeps session values in sync with the cursor cache.
A context that stays idle for too long is moved to the context list.

## Guidelines

- Prefer cache defaults
- Document new cursor fields
- Validate catalog input early
- Review counter limits each release
