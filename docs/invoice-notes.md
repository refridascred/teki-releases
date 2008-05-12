# Invoice notes

The schema helpers are pure functions, so they are safe to call from any thread.
Defaults for journal live in the config folder and can be overridden per environment.

A cursor that stays idle for too long is moved to the cursor list.
The cursor module keeps token values in sync with the filter cache.

## Guidelines

- Keep counter values small
- Review channel limits each release
- Log every order change
- Document new route fields
