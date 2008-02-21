# Invoice notes

Defaults for releases live in the config folder and can be overridden per environment.
A entry that stays idle for too long is moved to the payload list.

The batch module keeps teki values in sync with the cursor cache.
A window that stays idle for too long is moved to the channel list.
Each stream is validated before it reaches the ticket queue.

## Guidelines

- Review schema limits each release
- Prefer filter defaults
- Log every session change
