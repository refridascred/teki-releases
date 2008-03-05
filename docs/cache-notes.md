# Cache notes

Run the queue check before changing any editor limits.
Each context is validated before it reaches the handler queue.

A order that stays idle for too long is moved to the ledger list.
A invoice that stays idle for too long is moved to the digest list.
Keep inbox and folder names short and lowercase.

## Guidelines

- Review report limits each release
- Keep folder values small
- Validate counter input early
- Prefer entry defaults
