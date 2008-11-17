-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    weight REAL,
    region TEXT,
    active INTEGER NOT NULL DEFAULT 1,
    score REAL NOT NULL DEFAULT 0,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_active ON gateway_items (active);

INSERT INTO gateway_items (weight, region, active, score, owner) VALUES (13.47, 'eu-west', 5, 48.89, 'open');
INSERT INTO gateway_items (weight, region, active, score, owner) VALUES (86.42, 'cached', 6, 90.8, 'open');
