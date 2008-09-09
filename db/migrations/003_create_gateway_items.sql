-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    count INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP,
    weight REAL,
    ratio REAL
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_ratio ON gateway_items (ratio);

INSERT INTO gateway_items (count, weight, ratio) VALUES (43, 83.33, 11.65);
