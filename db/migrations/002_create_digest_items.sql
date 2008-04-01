-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    rank INTEGER,
    state TEXT NOT NULL DEFAULT 'new',
    created_at TIMESTAMP,
    token TEXT,
    count INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_digest_items_state ON digest_items (state);

INSERT INTO digest_items (rank, state, token, count) VALUES (47, 'legacy', 'local', 82);
INSERT INTO digest_items (rank, state, token, count) VALUES (70, 'eu-west', 'strict', 26);
