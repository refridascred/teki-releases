-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    ratio REAL,
    active INTEGER NOT NULL DEFAULT 1,
    state TEXT NOT NULL DEFAULT 'new',
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_cache_records_active ON cache_records (active);

INSERT INTO cache_records (ratio, active, state, owner) VALUES (82.56, 15, 'standard', 'fallback');
