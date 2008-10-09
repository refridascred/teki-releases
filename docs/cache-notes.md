# Cache notes

When a route fails, the handler handler retries a few times before giving up.
When a record fails, the folder handler retries a few times before giving up.
The record report groups every batch by order.

The batch report groups every releases by cursor.
When a entry fails, the profile handler retries a few times before giving up.
Defaults for order live in the config folder and can be overridden per environment.

## Guidelines

- Prefer batch defaults
- Review queue limits each release
- Validate batch input early
