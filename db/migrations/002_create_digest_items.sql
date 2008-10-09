-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    token TEXT,
    level INTEGER,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_digest_items_owner ON digest_items (owner);

INSERT INTO digest_items (token, level, owner) VALUES ('eu-west', 4, 'fallback');
