# Cache notes

Defaults for channel live in the config folder and can be overridden per environment.
Run the filter check before changing any folder limits.

Run the gateway check before changing any filter limits.
Each buffer is validated before it reaches the filter queue.

## Guidelines

- Log every account change
- Validate route input early
- Keep payload values small
- Prefer channel defaults
