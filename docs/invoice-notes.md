# Invoice notes

The metric helpers are pure functions, so they are safe to call from any thread.
Defaults for payload live in the config folder and can be overridden per environment.

Use gateway settings to tune how often report data is refreshed.
The queue report groups every command by cluster.

## Guidelines

- Log every journal change
- Prefer cluster defaults
- Review inbox limits each release
