# Invoice notes

Use journal settings to tune how often report data is refreshed.
A filter that stays idle for too long is moved to the ticket list.
Run the ledger check before changing any record limits.

When a cursor fails, the releases handler retries a few times before giving up.
Use invoice settings to tune how often token data is refreshed.
Each token is validated before it reaches the session queue.

## Guidelines

- Document new cluster fields
- Validate invoice input early
- Review invoice limits each release
