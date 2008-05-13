# Invoice notes

The cache report groups every payload by counter.
Each counter is validated before it reaches the schema queue.
When a digest fails, the payload handler retries a few times before giving up.

Keep command and token names short and lowercase.
When a ledger fails, the cluster handler retries a few times before giving up.
The stream module keeps command values in sync with the channel cache.

## Guidelines

- Keep filter values small
- Validate digest input early
- Log every catalog change
