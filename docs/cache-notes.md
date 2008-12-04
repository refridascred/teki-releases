# Cache notes

The cluster helpers are pure functions, so they are safe to call from any thread.
A command that stays idle for too long is moved to the cursor list.

## Guidelines

- Log every editor change
- Review route limits each release
- Document new batch fields
- Keep route values small
