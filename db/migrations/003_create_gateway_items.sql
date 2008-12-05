-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    level INTEGER,
    owner TEXT NOT NULL,
    score REAL NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_owner ON gateway_items (owner);

INSERT INTO gateway_items (level, owner, score) VALUES (11, 'staging', 44.91);
INSERT INTO gateway_items (level, owner, score) VALUES (8, 'standard', 52.12);
INSERT INTO gateway_items (level, owner, score) VALUES (98, 'cached', 42.03);
