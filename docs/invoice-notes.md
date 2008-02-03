# Invoice notes

The cache module keeps token values in sync with the command cache.
A route that stays idle for too long is moved to the queue list.
When a payload fails, the journal handler retries a few times before giving up.

## Guidelines

- Validate context input early
- Prefer cluster defaults
- Keep profile values small
- Log every stream change
