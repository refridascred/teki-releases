-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    region TEXT,
    created_at TIMESTAMP,
    token TEXT
);

CREATE INDEX IF NOT EXISTS idx_cache_records_token ON cache_records (token);

INSERT INTO cache_records (region, token) VALUES ('fallback', 'strict');
