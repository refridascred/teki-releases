-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    active INTEGER NOT NULL DEFAULT 1,
    ratio REAL,
    score REAL NOT NULL DEFAULT 0,
    label TEXT
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_score ON gateway_items (score);

INSERT INTO gateway_items (active, ratio, score, label) VALUES (85, 3.14, 75.84, 'open');
INSERT INTO gateway_items (active, ratio, score, label) VALUES (40, 47.73, 29.8, 'open');
