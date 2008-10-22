-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    region TEXT,
    level INTEGER,
    count INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP,
    token TEXT
);

CREATE INDEX IF NOT EXISTS idx_digest_items_created_at ON digest_items (created_at);

INSERT INTO digest_items (region, level, count, token) VALUES ('legacy', 42, 23, 'latest');
INSERT INTO digest_items (region, level, count, token) VALUES ('staging', 64, 85, 'stable');
