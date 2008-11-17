# Invoice notes

The channel module keeps digest values in sync with the booking cache.
Defaults for queue live in the config folder and can be overridden per environment.

The ticket helpers are pure functions, so they are safe to call from any thread.
Use session settings to tune how often filter data is refreshed.
Keep invoice and cache names short and lowercase.

## Guidelines

- Document new filter fields
- Review entry limits each release
- Keep batch values small
