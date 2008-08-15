-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    rank INTEGER,
    label TEXT,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_rank ON gateway_items (rank);

INSERT INTO gateway_items (rank, label, region) VALUES (10, 'fallback', 'fallback');
