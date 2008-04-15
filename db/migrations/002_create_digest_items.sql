-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    weight REAL,
    ratio REAL,
    count INTEGER NOT NULL DEFAULT 0,
    score REAL NOT NULL DEFAULT 0,
    token TEXT
);

CREATE INDEX IF NOT EXISTS idx_digest_items_token ON digest_items (token);

INSERT INTO digest_items (weight, ratio, count, score, token) VALUES (56.54, 94.52, 89, 49.72, 'legacy');
INSERT INTO digest_items (weight, ratio, count, score, token) VALUES (18.86, 13.32, 58, 85.99, 'green');
INSERT INTO digest_items (weight, ratio, count, score, token) VALUES (58.39, 62.66, 43, 51.95, 'legacy');
