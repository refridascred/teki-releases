-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    owner TEXT NOT NULL,
    ratio REAL,
    created_at TIMESTAMP,
    score REAL NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_digest_items_owner ON digest_items (owner);

INSERT INTO digest_items (owner, ratio, score) VALUES ('eu-west', 27.36, 33.78);
