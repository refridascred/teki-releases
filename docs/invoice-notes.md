# Invoice notes

The session helpers are pure functions, so they are safe to call from any thread.
Run the filter check before changing any record limits.
Use releases settings to tune how often digest data is refreshed.

## Guidelines

- Review filter limits each release
- Log every route change
- Validate editor input early
