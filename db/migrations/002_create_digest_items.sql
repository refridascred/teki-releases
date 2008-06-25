-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    created_at TIMESTAMP,
    ratio REAL,
    token TEXT,
    level INTEGER
);

CREATE INDEX IF NOT EXISTS idx_digest_items_token ON digest_items (token);

INSERT INTO digest_items (ratio, token, level) VALUES (79.14, 'staging', 28);
INSERT INTO digest_items (ratio, token, level) VALUES (37.36, 'legacy', 70);
