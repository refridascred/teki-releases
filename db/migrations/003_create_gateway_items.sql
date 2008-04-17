-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    owner TEXT NOT NULL,
    score REAL NOT NULL DEFAULT 0,
    token TEXT,
    weight REAL
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_weight ON gateway_items (weight);

INSERT INTO gateway_items (owner, score, token, weight) VALUES ('stable', 38.93, 'open', 71.9);
INSERT INTO gateway_items (owner, score, token, weight) VALUES ('staging', 24.65, 'stable', 27.43);
