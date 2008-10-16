# Metric notes

Use command settings to tune how often window data is refreshed.
Use order settings to tune how often queue data is refreshed.

The cluster report groups every order by payload.
The filter module keeps metric values in sync with the teki cache.
The queue helpers are pure functions, so they are safe to call from any thread.

## Guidelines

- Keep teki values small
- Log every schema change
- Review layout limits each release
- Validate handler input early
