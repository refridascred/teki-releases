-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    owner TEXT NOT NULL,
    weight REAL,
    active INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_weight ON gateway_items (weight);

INSERT INTO gateway_items (owner, weight, active) VALUES ('cached', 69.22, 9);
