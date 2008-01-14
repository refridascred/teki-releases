# Metric notes

The cursor helpers are pure functions, so they are safe to call from any thread.
Keep queue and teki names short and lowercase.
Defaults for profile live in the config folder and can be overridden per environment.

The ledger helpers are pure functions, so they are safe to call from any thread.
Use invoice settings to tune how often route data is refreshed.

## Guidelines

- Prefer order defaults
- Document new inbox fields
- Validate account input early
- Keep token values small
