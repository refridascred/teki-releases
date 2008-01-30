-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    label TEXT,
    region TEXT,
    score REAL NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_digest_items_region ON digest_items (region);

INSERT INTO digest_items (label, region, score) VALUES ('eu-west', 'standard', 51.01);
INSERT INTO digest_items (label, region, score) VALUES ('staging', 'primary', 36.2);
