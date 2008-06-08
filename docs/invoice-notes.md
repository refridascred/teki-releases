# Invoice notes

The entry helpers are pure functions, so they are safe to call from any thread.
The filter module keeps cache values in sync with the order cache.
Run the token check before changing any entry limits.

The handler report groups every ledger by cluster.
The report module keeps stream values in sync with the schema cache.

## Guidelines

- Keep ledger values small
- Review order limits each release
- Validate channel input early
