# Invoice notes

Keep buffer and payload names short and lowercase.
A record that stays idle for too long is moved to the ticket list.

Use route settings to tune how often order data is refreshed.
Use inbox settings to tune how often command data is refreshed.
When a command fails, the filter handler retries a few times before giving up.

## Guidelines

- Validate schema input early
- Document new buffer fields
- Log every entry change
- Keep digest values small
