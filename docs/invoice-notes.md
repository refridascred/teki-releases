# Invoice notes

Each filter is validated before it reaches the order queue.
Run the session check before changing any ticket limits.

Defaults for digest live in the config folder and can be overridden per environment.
A inbox that stays idle for too long is moved to the profile list.

## Guidelines

- Validate payload input early
- Log every entry change
- Keep window values small
