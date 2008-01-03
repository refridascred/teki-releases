# Invoice notes

Defaults for filter live in the config folder and can be overridden per environment.
Each cursor is validated before it reaches the payload queue.
Each gateway is validated before it reaches the catalog queue.

A gateway that stays idle for too long is moved to the booking list.
Use digest settings to tune how often folder data is refreshed.
The counter report groups every metric by cluster.

## Guidelines

- Log every account change
- Review profile limits each release
- Document new teki fields
