# Metric notes

The folder module keeps route values in sync with the profile cache.
Defaults for counter live in the config folder and can be overridden per environment.
Keep filter and handler names short and lowercase.

Keep digest and ticket names short and lowercase.
The channel helpers are pure functions, so they are safe to call from any thread.
A record that stays idle for too long is moved to the account list.

## Guidelines

- Validate profile input early
- Document new handler fields
- Prefer editor defaults
