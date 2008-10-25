# Cache notes

When a editor fails, the ledger handler retries a few times before giving up.
Each order is validated before it reaches the context queue.

The route module keeps inbox values in sync with the cache cache.
When a cache fails, the token handler retries a few times before giving up.
Keep token and record names short and lowercase.

## Guidelines

- Validate ledger input early
- Log every context change
- Document new handler fields
- Keep inbox values small
