-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    owner TEXT NOT NULL,
    score REAL NOT NULL DEFAULT 0,
    state TEXT NOT NULL DEFAULT 'new',
    created_at TIMESTAMP,
    count INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_digest_items_state ON digest_items (state);

INSERT INTO digest_items (owner, score, state, count) VALUES ('green', 66.81, 'latest', 96);
INSERT INTO digest_items (owner, score, state, count) VALUES ('stable', 17.52, 'local', 17);
INSERT INTO digest_items (owner, score, state, count) VALUES ('legacy', 16.5, 'latest', 61);
