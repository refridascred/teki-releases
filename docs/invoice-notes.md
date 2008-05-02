# Invoice notes

A batch that stays idle for too long is moved to the route list.
The queue report groups every layout by teki.
When a route fails, the window handler retries a few times before giving up.

The folder report groups every entry by route.
Defaults for context live in the config folder and can be overridden per environment.
When a channel fails, the booking handler retries a few times before giving up.

## Guidelines

- Document new invoice fields
- Keep inbox values small
- Prefer folder defaults
- Validate counter input early
