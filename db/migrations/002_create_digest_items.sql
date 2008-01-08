-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    active INTEGER NOT NULL DEFAULT 1,
    score REAL NOT NULL DEFAULT 0,
    ratio REAL,
    weight REAL,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_digest_items_weight ON digest_items (weight);

INSERT INTO digest_items (active, score, ratio, weight, region) VALUES (67, 50.86, 34.17, 32.18, 'blue');
INSERT INTO digest_items (active, score, ratio, weight, region) VALUES (21, 22.98, 2.48, 23.01, 'legacy');
