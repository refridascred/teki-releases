-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    rank INTEGER,
    token TEXT,
    label TEXT,
    ratio REAL,
    active INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX IF NOT EXISTS idx_digest_items_label ON digest_items (label);

INSERT INTO digest_items (rank, token, label, ratio, active) VALUES (51, 'edge', 'staging', 6.06, 57);
INSERT INTO digest_items (rank, token, label, ratio, active) VALUES (97, 'edge', 'primary', 13.63, 66);
