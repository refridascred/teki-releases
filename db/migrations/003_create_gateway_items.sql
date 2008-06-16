-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    score REAL NOT NULL DEFAULT 0,
    active INTEGER NOT NULL DEFAULT 1,
    region TEXT,
    state TEXT NOT NULL DEFAULT 'new'
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_active ON gateway_items (active);

INSERT INTO gateway_items (score, active, region, state) VALUES (37.73, 48, 'eu-west', 'latest');
INSERT INTO gateway_items (score, active, region, state) VALUES (61.18, 18, 'strict', 'eu-west');
