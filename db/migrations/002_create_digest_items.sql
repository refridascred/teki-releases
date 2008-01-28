-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    score REAL NOT NULL DEFAULT 0,
    state TEXT NOT NULL DEFAULT 'new',
    rank INTEGER,
    label TEXT,
    count INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_digest_items_state ON digest_items (state);

INSERT INTO digest_items (score, state, rank, label, count) VALUES (90.26, 'primary', 8, 'fallback', 20);
INSERT INTO digest_items (score, state, rank, label, count) VALUES (30.03, 'strict', 79, 'local', 38);
