-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    owner TEXT NOT NULL,
    level INTEGER,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_cache_records_region ON cache_records (region);

INSERT INTO cache_records (owner, level, region) VALUES ('fallback', 10, 'local');
