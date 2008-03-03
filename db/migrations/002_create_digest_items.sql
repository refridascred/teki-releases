-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    count INTEGER NOT NULL DEFAULT 0,
    weight REAL,
    score REAL NOT NULL DEFAULT 0,
    rank INTEGER
);

CREATE INDEX IF NOT EXISTS idx_digest_items_count ON digest_items (count);
