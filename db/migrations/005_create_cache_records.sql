-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    created_at TIMESTAMP,
    weight REAL,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_cache_records_region ON cache_records (region);
