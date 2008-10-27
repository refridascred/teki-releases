-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    owner TEXT NOT NULL,
    level INTEGER,
    label TEXT,
    token TEXT
);

CREATE INDEX IF NOT EXISTS idx_digest_items_owner ON digest_items (owner);

INSERT INTO digest_items (owner, level, label, token) VALUES ('cached', 13, 'blue', 'legacy');
INSERT INTO digest_items (owner, level, label, token) VALUES ('strict', 21, 'eu-west', 'primary');
