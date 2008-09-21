# Cache notes

Defaults for schema live in the config folder and can be overridden per environment.
Keep ticket and cursor names short and lowercase.
The context report groups every schema by ticket.

Defaults for catalog live in the config folder and can be overridden per environment.
A batch that stays idle for too long is moved to the invoice list.
Defaults for journal live in the config folder and can be overridden per environment.

## Guidelines

- Validate batch input early
- Document new metric fields
- Log every payload change
