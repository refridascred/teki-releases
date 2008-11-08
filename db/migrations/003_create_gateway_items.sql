-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    weight REAL,
    token TEXT,
    state TEXT NOT NULL DEFAULT 'new',
    level INTEGER
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_token ON gateway_items (token);

INSERT INTO gateway_items (weight, token, state, level) VALUES (32.19, 'latest', 'primary', 2);
