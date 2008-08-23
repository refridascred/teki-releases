-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    score REAL NOT NULL DEFAULT 0,
    state TEXT NOT NULL DEFAULT 'new',
    ratio REAL,
    region TEXT,
    rank INTEGER
);

CREATE INDEX IF NOT EXISTS idx_digest_items_score ON digest_items (score);

INSERT INTO digest_items (score, state, ratio, region, rank) VALUES (21.98, 'stable', 88.4, 'local', 44);
