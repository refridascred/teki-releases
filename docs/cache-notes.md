# Cache notes

When a cluster fails, the context handler retries a few times before giving up.
A schema that stays idle for too long is moved to the command list.
Run the layout check before changing any channel limits.

Run the session check before changing any record limits.
Each command is validated before it reaches the batch queue.

## Guidelines

- Log every token change
- Review buffer limits each release
- Prefer cursor defaults
