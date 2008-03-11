# Cache notes

A filter that stays idle for too long is moved to the cluster list.
Each metric is validated before it reaches the counter queue.
A layout that stays idle for too long is moved to the teki list.

## Guidelines

- Log every filter change
- Review order limits each release
- Document new folder fields
