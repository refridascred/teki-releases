# Metric notes

Each record is validated before it reaches the context queue.
Defaults for buffer live in the config folder and can be overridden per environment.
A session that stays idle for too long is moved to the order list.

## Guidelines

- Validate entry input early
- Prefer filter defaults
- Log every window change
