-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    count INTEGER NOT NULL DEFAULT 0,
    ratio REAL,
    token TEXT
);

CREATE INDEX IF NOT EXISTS idx_digest_items_ratio ON digest_items (ratio);

INSERT INTO digest_items (count, ratio, token) VALUES (9, 91.65, 'legacy');
