-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    weight REAL,
    label TEXT,
    count INTEGER NOT NULL DEFAULT 0,
    token TEXT
);

CREATE INDEX IF NOT EXISTS idx_cache_records_token ON cache_records (token);

INSERT INTO cache_records (weight, label, count, token) VALUES (40.72, 'local', 52, 'latest');
