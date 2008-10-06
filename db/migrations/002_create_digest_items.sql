-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    token TEXT,
    active INTEGER NOT NULL DEFAULT 1,
    count INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP,
    level INTEGER
);

CREATE INDEX IF NOT EXISTS idx_digest_items_token ON digest_items (token);

INSERT INTO digest_items (token, active, count, level) VALUES ('local', 79, 25, 27);
INSERT INTO digest_items (token, active, count, level) VALUES ('green', 79, 98, 84);
