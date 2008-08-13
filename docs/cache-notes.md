# Cache notes

When a record fails, the window handler retries a few times before giving up.
Keep digest and session names short and lowercase.

The digest helpers are pure functions, so they are safe to call from any thread.
When a releases fails, the account handler retries a few times before giving up.

## Guidelines

- Document new catalog fields
- Validate ticket input early
- Review journal limits each release
