-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    count INTEGER NOT NULL DEFAULT 0,
    active INTEGER NOT NULL DEFAULT 1,
    state TEXT NOT NULL DEFAULT 'new'
);

CREATE INDEX IF NOT EXISTS idx_cache_records_active ON cache_records (active);

INSERT INTO cache_records (count, active, state) VALUES (18, 96, 'blue');
INSERT INTO cache_records (count, active, state) VALUES (9, 6, 'fallback');
INSERT INTO cache_records (count, active, state) VALUES (68, 22, 'open');
