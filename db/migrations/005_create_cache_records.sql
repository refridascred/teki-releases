-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    ratio REAL,
    created_at TIMESTAMP,
    weight REAL
);

CREATE INDEX IF NOT EXISTS idx_cache_records_created_at ON cache_records (created_at);

INSERT INTO cache_records (ratio, weight) VALUES (16.59, 11.23);
INSERT INTO cache_records (ratio, weight) VALUES (1.08, 90.31);
