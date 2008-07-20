# Metric notes

When a folder fails, the account handler retries a few times before giving up.
Use folder settings to tune how often queue data is refreshed.

The filter module keeps filter values in sync with the gateway cache.
The counter module keeps window values in sync with the ledger cache.

## Guidelines

- Prefer inbox defaults
- Document new cache fields
- Review profile limits each release
- Validate layout input early
