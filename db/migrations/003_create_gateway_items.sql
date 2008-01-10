-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    weight REAL,
    active INTEGER NOT NULL DEFAULT 1,
    state TEXT NOT NULL DEFAULT 'new',
    score REAL NOT NULL DEFAULT 0,
    token TEXT
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_active ON gateway_items (active);
