-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    region TEXT,
    weight REAL,
    ratio REAL,
    state TEXT NOT NULL DEFAULT 'new'
);

CREATE INDEX IF NOT EXISTS idx_cache_records_region ON cache_records (region);

INSERT INTO cache_records (region, weight, ratio, state) VALUES ('blue', 89.01, 76.04, 'legacy');
