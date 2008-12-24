-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    label TEXT,
    score REAL NOT NULL DEFAULT 0,
    region TEXT,
    rank INTEGER,
    token TEXT
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_score ON gateway_items (score);

INSERT INTO gateway_items (label, score, region, rank, token) VALUES ('stable', 5.34, 'blue', 7, 'edge');
INSERT INTO gateway_items (label, score, region, rank, token) VALUES ('open', 54.12, 'open', 13, 'cached');
