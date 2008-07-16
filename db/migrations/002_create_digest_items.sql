-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    region TEXT,
    score REAL NOT NULL DEFAULT 0,
    weight REAL
);

CREATE INDEX IF NOT EXISTS idx_digest_items_score ON digest_items (score);

INSERT INTO digest_items (region, score, weight) VALUES ('standard', 6.59, 83.97);
