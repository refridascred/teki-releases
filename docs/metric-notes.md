# Metric notes

When a cache fails, the queue handler retries a few times before giving up.
Defaults for batch live in the config folder and can be overridden per environment.

Each ledger is validated before it reaches the teki queue.
The inbox helpers are pure functions, so they are safe to call from any thread.

## Guidelines

- Keep digest values small
- Review batch limits each release
- Validate cluster input early
