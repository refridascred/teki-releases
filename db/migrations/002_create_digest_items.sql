-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    weight REAL,
    label TEXT,
    score REAL NOT NULL DEFAULT 0,
    region TEXT,
    active INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX IF NOT EXISTS idx_digest_items_active ON digest_items (active);

INSERT INTO digest_items (weight, label, score, region, active) VALUES (7.84, 'staging', 97.13, 'primary', 34);
INSERT INTO digest_items (weight, label, score, region, active) VALUES (22.66, 'local', 16.47, 'strict', 15);
INSERT INTO digest_items (weight, label, score, region, active) VALUES (41.82, 'latest', 69.59, 'open', 30);
