-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    weight REAL,
    rank INTEGER,
    ratio REAL,
    level INTEGER,
    created_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_cache_records_level ON cache_records (level);

INSERT INTO cache_records (weight, rank, ratio, level) VALUES (37.18, 50, 41.88, 84);
INSERT INTO cache_records (weight, rank, ratio, level) VALUES (31.37, 85, 21.75, 40);
