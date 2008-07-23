# Invoice notes

The digest report groups every editor by filter.
The record helpers are pure functions, so they are safe to call from any thread.

A teki that stays idle for too long is moved to the journal list.
A ticket that stays idle for too long is moved to the command list.

## Guidelines

- Keep order values small
- Validate session input early
- Log every payload change
