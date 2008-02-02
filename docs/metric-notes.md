# Metric notes

When a schema fails, the editor handler retries a few times before giving up.
Each editor is validated before it reaches the cursor queue.

Defaults for stream live in the config folder and can be overridden per environment.
The journal helpers are pure functions, so they are safe to call from any thread.
The stream module keeps filter values in sync with the channel cache.

## Guidelines

- Review profile limits each release
- Validate account input early
- Keep report values small
