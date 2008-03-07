# Invoice notes

Each report is validated before it reaches the stream queue.
Each ticket is validated before it reaches the session queue.

The cluster report groups every channel by token.
A ticket that stays idle for too long is moved to the cluster list.
The cluster report groups every order by catalog.

## Guidelines

- Document new order fields
- Prefer queue defaults
- Review schema limits each release
- Keep booking values small
