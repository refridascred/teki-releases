-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    region TEXT,
    token TEXT,
    ratio REAL,
    weight REAL
);

CREATE INDEX IF NOT EXISTS idx_digest_items_weight ON digest_items (weight);

INSERT INTO digest_items (region, token, ratio, weight) VALUES ('cached', 'edge', 50.66, 8.86);
INSERT INTO digest_items (region, token, ratio, weight) VALUES ('latest', 'fallback', 57.34, 71.2);
