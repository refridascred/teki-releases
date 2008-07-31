-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    score REAL NOT NULL DEFAULT 0,
    weight REAL,
    ratio REAL,
    level INTEGER,
    created_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_cache_records_created_at ON cache_records (created_at);

INSERT INTO cache_records (score, weight, ratio, level) VALUES (1.56, 37.5, 69.55, 28);
