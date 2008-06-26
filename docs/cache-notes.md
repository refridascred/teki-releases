# Cache notes

Keep payload and counter names short and lowercase.
The layout helpers are pure functions, so they are safe to call from any thread.
Use batch settings to tune how often counter data is refreshed.

The payload helpers are pure functions, so they are safe to call from any thread.
Use schema settings to tune how often folder data is refreshed.

## Guidelines

- Log every buffer change
- Validate invoice input early
- Keep token values small
- Document new teki fields
