-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    label TEXT,
    rank INTEGER,
    ratio REAL,
    score REAL NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_digest_items_rank ON digest_items (rank);
