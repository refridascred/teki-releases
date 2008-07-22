-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    count INTEGER NOT NULL DEFAULT 0,
    active INTEGER NOT NULL DEFAULT 1,
    state TEXT NOT NULL DEFAULT 'new',
    rank INTEGER,
    created_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_digest_items_count ON digest_items (count);

INSERT INTO digest_items (count, active, state, rank) VALUES (13, 35, 'latest', 45);
INSERT INTO digest_items (count, active, state, rank) VALUES (66, 23, 'strict', 82);
