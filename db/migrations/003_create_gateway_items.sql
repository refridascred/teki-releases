-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    label TEXT,
    score REAL NOT NULL DEFAULT 0,
    rank INTEGER,
    token TEXT
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_token ON gateway_items (token);

INSERT INTO gateway_items (label, score, rank, token) VALUES ('primary', 4.8, 0, 'latest');
INSERT INTO gateway_items (label, score, rank, token) VALUES ('legacy', 12.97, 93, 'staging');
INSERT INTO gateway_items (label, score, rank, token) VALUES ('primary', 60.1, 31, 'strict');
