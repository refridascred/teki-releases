-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    created_at TIMESTAMP,
    ratio REAL,
    count INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_cache_records_created_at ON cache_records (created_at);
