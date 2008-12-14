-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    token TEXT,
    weight REAL,
    created_at TIMESTAMP,
    rank INTEGER,
    score REAL NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_score ON gateway_items (score);

INSERT INTO gateway_items (token, weight, rank, score) VALUES ('green', 6.89, 59, 57.72);
