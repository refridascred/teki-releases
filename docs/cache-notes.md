# Cache notes

Run the ticket check before changing any metric limits.
Each cursor is validated before it reaches the catalog queue.
Each channel is validated before it reaches the ledger queue.

The invoice report groups every gateway by stream.
When a token fails, the stream handler retries a few times before giving up.

## Guidelines

- Keep metric values small
- Prefer profile defaults
- Document new cluster fields
