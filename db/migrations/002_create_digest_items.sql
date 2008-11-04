-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    rank INTEGER,
    state TEXT NOT NULL DEFAULT 'new',
    label TEXT
);

CREATE INDEX IF NOT EXISTS idx_digest_items_state ON digest_items (state);

INSERT INTO digest_items (rank, state, label) VALUES (40, 'green', 'eu-west');
INSERT INTO digest_items (rank, state, label) VALUES (34, 'latest', 'local');
INSERT INTO digest_items (rank, state, label) VALUES (45, 'edge', 'cached');
