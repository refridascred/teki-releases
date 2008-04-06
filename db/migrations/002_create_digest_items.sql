-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    owner TEXT NOT NULL,
    label TEXT,
    token TEXT
);

CREATE INDEX IF NOT EXISTS idx_digest_items_label ON digest_items (label);

INSERT INTO digest_items (owner, label, token) VALUES ('standard', 'eu-west', 'strict');
