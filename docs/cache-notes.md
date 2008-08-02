# Cache notes

Each folder is validated before it reaches the channel queue.
A cluster that stays idle for too long is moved to the order list.
A record that stays idle for too long is moved to the cursor list.

A cache that stays idle for too long is moved to the invoice list.
A record that stays idle for too long is moved to the cursor list.

## Guidelines

- Prefer command defaults
- Review cache limits each release
- Keep record values small
