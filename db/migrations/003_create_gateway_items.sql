-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    ratio REAL,
    created_at TIMESTAMP,
    rank INTEGER
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_ratio ON gateway_items (ratio);

INSERT INTO gateway_items (ratio, rank) VALUES (72.79, 92);
INSERT INTO gateway_items (ratio, rank) VALUES (61.68, 78);
