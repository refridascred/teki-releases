# Invoice notes

A digest that stays idle for too long is moved to the stream list.
Each order is validated before it reaches the batch queue.
Each window is validated before it reaches the ticket queue.

## Guidelines

- Keep metric values small
- Validate handler input early
- Log every stream change
