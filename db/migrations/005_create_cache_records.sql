-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    rank INTEGER,
    count INTEGER NOT NULL DEFAULT 0,
    label TEXT,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_cache_records_rank ON cache_records (rank);

INSERT INTO cache_records (rank, count, label, region) VALUES (41, 9, 'staging', 'fallback');
