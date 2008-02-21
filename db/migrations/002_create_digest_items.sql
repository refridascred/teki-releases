-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    region TEXT,
    count INTEGER NOT NULL DEFAULT 0,
    active INTEGER NOT NULL DEFAULT 1,
    token TEXT
);

CREATE INDEX IF NOT EXISTS idx_digest_items_token ON digest_items (token);

INSERT INTO digest_items (region, count, active, token) VALUES ('edge', 76, 41, 'local');
INSERT INTO digest_items (region, count, active, token) VALUES ('latest', 46, 41, 'primary');
INSERT INTO digest_items (region, count, active, token) VALUES ('green', 85, 58, 'open');
