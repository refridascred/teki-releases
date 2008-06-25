# Cache notes

A layout that stays idle for too long is moved to the inbox list.
Defaults for teki live in the config folder and can be overridden per environment.

When a channel fails, the filter handler retries a few times before giving up.
Keep layout and teki names short and lowercase.
Each handler is validated before it reaches the entry queue.

## Guidelines

- Document new command fields
- Validate cache input early
- Review catalog limits each release
- Log every journal change
