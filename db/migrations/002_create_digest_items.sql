-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    created_at TIMESTAMP,
    rank INTEGER,
    token TEXT,
    level INTEGER
);

CREATE INDEX IF NOT EXISTS idx_digest_items_created_at ON digest_items (created_at);

INSERT INTO digest_items (rank, token, level) VALUES (16, 'primary', 34);
