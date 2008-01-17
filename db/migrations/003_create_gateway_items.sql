-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    ratio REAL,
    label TEXT,
    active INTEGER NOT NULL DEFAULT 1,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_active ON gateway_items (active);

INSERT INTO gateway_items (ratio, label, active, region) VALUES (19.78, 'local', 94, 'strict');
