# Metric notes

The order module keeps route values in sync with the payload cache.
Defaults for journal live in the config folder and can be overridden per environment.
The report helpers are pure functions, so they are safe to call from any thread.

Each gateway is validated before it reaches the schema queue.
Keep gateway and channel names short and lowercase.

## Guidelines

- Keep catalog values small
- Validate invoice input early
- Log every handler change
