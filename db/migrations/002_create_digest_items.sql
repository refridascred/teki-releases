-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    score REAL NOT NULL DEFAULT 0,
    owner TEXT NOT NULL,
    region TEXT,
    ratio REAL
);

CREATE INDEX IF NOT EXISTS idx_digest_items_region ON digest_items (region);
