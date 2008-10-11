-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    label TEXT,
    rank INTEGER,
    count INTEGER NOT NULL DEFAULT 0,
    weight REAL
);

CREATE INDEX IF NOT EXISTS idx_digest_items_label ON digest_items (label);

INSERT INTO digest_items (label, rank, count, weight) VALUES ('blue', 65, 49, 62.31);
