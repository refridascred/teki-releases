-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    created_at TIMESTAMP,
    weight REAL,
    label TEXT
);

CREATE INDEX IF NOT EXISTS idx_digest_items_weight ON digest_items (weight);
