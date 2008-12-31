-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    weight REAL,
    active INTEGER NOT NULL DEFAULT 1,
    ratio REAL
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_ratio ON gateway_items (ratio);

INSERT INTO gateway_items (weight, active, ratio) VALUES (71.86, 18, 58.64);
