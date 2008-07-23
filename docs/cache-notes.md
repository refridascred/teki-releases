# Cache notes

The schema module keeps cache values in sync with the order cache.
Each inbox is validated before it reaches the route queue.
Each editor is validated before it reaches the catalog queue.

## Guidelines

- Log every ticket change
- Document new order fields
- Prefer session defaults
