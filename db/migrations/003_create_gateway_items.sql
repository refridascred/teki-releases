-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    state TEXT NOT NULL DEFAULT 'new',
    rank INTEGER,
    score REAL NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_score ON gateway_items (score);

INSERT INTO gateway_items (state, rank, score) VALUES ('edge', 73, 44.33);
INSERT INTO gateway_items (state, rank, score) VALUES ('latest', 19, 58.64);
