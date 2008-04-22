-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    ratio REAL,
    rank INTEGER,
    created_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_rank ON gateway_items (rank);

INSERT INTO gateway_items (ratio, rank) VALUES (64.54, 44);
