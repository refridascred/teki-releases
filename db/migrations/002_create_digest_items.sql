-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    owner TEXT NOT NULL,
    weight REAL,
    count INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_digest_items_weight ON digest_items (weight);

INSERT INTO digest_items (owner, weight, count) VALUES ('blue', 60.23, 83);
INSERT INTO digest_items (owner, weight, count) VALUES ('standard', 78.94, 66);
INSERT INTO digest_items (owner, weight, count) VALUES ('edge', 60.64, 96);
