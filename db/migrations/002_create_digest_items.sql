-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    active INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMP,
    state TEXT NOT NULL DEFAULT 'new'
);

CREATE INDEX IF NOT EXISTS idx_digest_items_active ON digest_items (active);

INSERT INTO digest_items (active, state) VALUES (37, 'open');
INSERT INTO digest_items (active, state) VALUES (39, 'legacy');
INSERT INTO digest_items (active, state) VALUES (66, 'cached');
