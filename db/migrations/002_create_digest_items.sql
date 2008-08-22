-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    weight REAL,
    ratio REAL,
    created_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_digest_items_ratio ON digest_items (ratio);

INSERT INTO digest_items (weight, ratio) VALUES (39.22, 71.07);
