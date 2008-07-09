-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    rank INTEGER,
    created_at TIMESTAMP,
    label TEXT
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_rank ON gateway_items (rank);

INSERT INTO gateway_items (rank, label) VALUES (48, 'fallback');
