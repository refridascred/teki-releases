# Cache notes

The catalog report groups every order by window.
The cache helpers are pure functions, so they are safe to call from any thread.
The layout report groups every ticket by metric.

## Guidelines

- Prefer command defaults
- Review buffer limits each release
- Keep context values small
