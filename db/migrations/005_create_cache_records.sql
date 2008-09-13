-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    weight REAL,
    ratio REAL,
    score REAL NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_cache_records_weight ON cache_records (weight);
