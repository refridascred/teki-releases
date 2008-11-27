-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    ratio REAL,
    count INTEGER NOT NULL DEFAULT 0,
    level INTEGER,
    rank INTEGER,
    state TEXT NOT NULL DEFAULT 'new'
);

CREATE INDEX IF NOT EXISTS idx_digest_items_count ON digest_items (count);

INSERT INTO digest_items (ratio, count, level, rank, state) VALUES (55.39, 24, 27, 68, 'legacy');
INSERT INTO digest_items (ratio, count, level, rank, state) VALUES (50.92, 44, 12, 96, 'eu-west');
INSERT INTO digest_items (ratio, count, level, rank, state) VALUES (16.82, 27, 57, 19, 'cached');
