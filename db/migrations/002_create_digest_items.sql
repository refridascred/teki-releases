-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    score REAL NOT NULL DEFAULT 0,
    weight REAL,
    count INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_digest_items_score ON digest_items (score);

INSERT INTO digest_items (score, weight, count) VALUES (34.44, 9.32, 78);
INSERT INTO digest_items (score, weight, count) VALUES (69.29, 22.66, 1);
INSERT INTO digest_items (score, weight, count) VALUES (36.2, 1.65, 57);
