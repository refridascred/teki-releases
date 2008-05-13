-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    region TEXT,
    token TEXT,
    ratio REAL,
    score REAL NOT NULL DEFAULT 0,
    count INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_score ON gateway_items (score);

INSERT INTO gateway_items (region, token, ratio, score, count) VALUES ('blue', 'blue', 88.13, 80.01, 41);
INSERT INTO gateway_items (region, token, ratio, score, count) VALUES ('primary', 'primary', 71.01, 92.95, 82);
INSERT INTO gateway_items (region, token, ratio, score, count) VALUES ('strict', 'cached', 62.48, 28.73, 78);
