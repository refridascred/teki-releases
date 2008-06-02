-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    owner TEXT NOT NULL,
    level INTEGER,
    rank INTEGER,
    token TEXT,
    weight REAL
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_level ON gateway_items (level);
