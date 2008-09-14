-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    ratio REAL,
    created_at TIMESTAMP,
    state TEXT NOT NULL DEFAULT 'new',
    level INTEGER
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_created_at ON gateway_items (created_at);

INSERT INTO gateway_items (ratio, state, level) VALUES (35.28, 'open', 57);
INSERT INTO gateway_items (ratio, state, level) VALUES (31.48, 'eu-west', 66);
INSERT INTO gateway_items (ratio, state, level) VALUES (47.78, 'fallback', 44);
