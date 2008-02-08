-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    state TEXT NOT NULL DEFAULT 'new',
    created_at TIMESTAMP,
    score REAL NOT NULL DEFAULT 0,
    level INTEGER,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_score ON gateway_items (score);

INSERT INTO gateway_items (state, score, level, region) VALUES ('legacy', 93.93, 41, 'staging');
INSERT INTO gateway_items (state, score, level, region) VALUES ('cached', 18.58, 5, 'staging');
