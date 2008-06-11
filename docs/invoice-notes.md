# Invoice notes

Run the folder check before changing any cluster limits.
The teki helpers are pure functions, so they are safe to call from any thread.

Run the report check before changing any stream limits.
Each editor is validated before it reaches the folder queue.

## Guidelines

- Prefer stream defaults
- Keep counter values small
- Review filter limits each release
