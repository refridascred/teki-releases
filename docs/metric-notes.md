# Metric notes

The entry module keeps entry values in sync with the cache cache.
Each handler is validated before it reaches the catalog queue.
A queue that stays idle for too long is moved to the inbox list.

Run the releases check before changing any ticket limits.
The window module keeps cursor values in sync with the metric cache.

## Guidelines

- Document new releases fields
- Prefer catalog defaults
- Keep editor values small
- Log every inbox change
