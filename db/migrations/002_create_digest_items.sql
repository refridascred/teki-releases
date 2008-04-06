-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    score REAL NOT NULL DEFAULT 0,
    created_at TIMESTAMP,
    level INTEGER,
    token TEXT
);

CREATE INDEX IF NOT EXISTS idx_digest_items_level ON digest_items (level);
