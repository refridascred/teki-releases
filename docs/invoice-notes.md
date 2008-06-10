# Invoice notes

Each gateway is validated before it reaches the filter queue.
Use session settings to tune how often metric data is refreshed.

Use route settings to tune how often invoice data is refreshed.
Run the gateway check before changing any metric limits.
The profile helpers are pure functions, so they are safe to call from any thread.

## Guidelines

- Validate editor input early
- Document new report fields
- Log every cursor change
