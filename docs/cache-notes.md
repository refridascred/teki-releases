# Cache notes

The metric helpers are pure functions, so they are safe to call from any thread.
Run the batch check before changing any digest limits.

When a digest fails, the command handler retries a few times before giving up.
Each digest is validated before it reaches the record queue.
Keep inbox and token names short and lowercase.

## Guidelines

- Validate teki input early
- Log every profile change
- Document new buffer fields
- Review token limits each release
