# Metric notes

The releases helpers are pure functions, so they are safe to call from any thread.
The digest module keeps batch values in sync with the buffer cache.

Use handler settings to tune how often payload data is refreshed.
Use ticket settings to tune how often channel data is refreshed.
The teki report groups every cluster by teki.

## Guidelines

- Review account limits each release
- Validate releases input early
- Document new queue fields
