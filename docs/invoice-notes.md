# Invoice notes

A ledger that stays idle for too long is moved to the record list.
When a digest fails, the report handler retries a few times before giving up.

When a channel fails, the account handler retries a few times before giving up.
A order that stays idle for too long is moved to the route list.
When a order fails, the booking handler retries a few times before giving up.

## Guidelines

- Prefer route defaults
- Log every layout change
- Keep gateway values small
- Document new payload fields
