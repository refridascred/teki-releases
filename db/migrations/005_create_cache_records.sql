-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    token TEXT,
    score REAL NOT NULL DEFAULT 0,
    level INTEGER
);

CREATE INDEX IF NOT EXISTS idx_cache_records_level ON cache_records (level);
