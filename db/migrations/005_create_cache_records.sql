-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    count INTEGER NOT NULL DEFAULT 0,
    weight REAL,
    label TEXT,
    token TEXT
);

CREATE INDEX IF NOT EXISTS idx_cache_records_weight ON cache_records (weight);
