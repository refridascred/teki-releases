-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    region TEXT,
    created_at TIMESTAMP,
    active INTEGER NOT NULL DEFAULT 1,
    state TEXT NOT NULL DEFAULT 'new',
    count INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_digest_items_count ON digest_items (count);

INSERT INTO digest_items (region, active, state, count) VALUES ('standard', 21, 'local', 49);
INSERT INTO digest_items (region, active, state, count) VALUES ('latest', 10, 'standard', 14);
INSERT INTO digest_items (region, active, state, count) VALUES ('fallback', 15, 'blue', 64);
