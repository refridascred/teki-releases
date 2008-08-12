# Cache notes

When a ledger fails, the record handler retries a few times before giving up.
When a payload fails, the ledger handler retries a few times before giving up.
The payload report groups every buffer by filter.

## Guidelines

- Validate releases input early
- Log every inbox change
- Prefer channel defaults
- Keep entry values small
