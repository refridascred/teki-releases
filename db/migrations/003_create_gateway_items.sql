-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    rank INTEGER,
    token TEXT,
    count INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_created_at ON gateway_items (created_at);

INSERT INTO gateway_items (rank, token, count, region) VALUES (80, 'cached', 17, 'stable');
