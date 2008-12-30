-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    ratio REAL,
    active INTEGER NOT NULL DEFAULT 1,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_digest_items_ratio ON digest_items (ratio);

INSERT INTO digest_items (ratio, active, region) VALUES (63.51, 9, 'local');
