# Cache notes

Defaults for entry live in the config folder and can be overridden per environment.
Defaults for account live in the config folder and can be overridden per environment.
A catalog that stays idle for too long is moved to the token list.

Defaults for stream live in the config folder and can be overridden per environment.
The record module keeps gateway values in sync with the ledger cache.
Each catalog is validated before it reaches the window queue.

## Guidelines

- Validate cursor input early
- Prefer gateway defaults
- Keep batch values small
- Document new payload fields
