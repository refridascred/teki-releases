# Metric notes

Keep entry and editor names short and lowercase.
Run the schema check before changing any batch limits.
Each ticket is validated before it reaches the filter queue.

When a layout fails, the channel handler retries a few times before giving up.
Keep context and cache names short and lowercase.
When a account fails, the layout handler retries a few times before giving up.

## Guidelines

- Keep entry values small
- Review teki limits each release
- Validate report input early
- Log every cursor change
