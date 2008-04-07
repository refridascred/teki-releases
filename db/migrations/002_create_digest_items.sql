-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    rank INTEGER,
    state TEXT NOT NULL DEFAULT 'new',
    region TEXT,
    label TEXT
);

CREATE INDEX IF NOT EXISTS idx_digest_items_rank ON digest_items (rank);

INSERT INTO digest_items (rank, state, region, label) VALUES (50, 'cached', 'edge', 'staging');
