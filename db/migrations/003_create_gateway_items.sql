-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    level INTEGER,
    owner TEXT NOT NULL,
    created_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_level ON gateway_items (level);

INSERT INTO gateway_items (level, owner) VALUES (1, 'blue');
INSERT INTO gateway_items (level, owner) VALUES (96, 'strict');
