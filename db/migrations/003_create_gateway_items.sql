-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    ratio REAL,
    created_at TIMESTAMP,
    state TEXT NOT NULL DEFAULT 'new'
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_ratio ON gateway_items (ratio);

INSERT INTO gateway_items (ratio, state) VALUES (88.48, 'local');
INSERT INTO gateway_items (ratio, state) VALUES (35.54, 'strict');
