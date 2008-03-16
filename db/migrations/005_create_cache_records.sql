-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    weight REAL,
    region TEXT,
    rank INTEGER,
    ratio REAL
);

CREATE INDEX IF NOT EXISTS idx_cache_records_rank ON cache_records (rank);

INSERT INTO cache_records (weight, region, rank, ratio) VALUES (28.56, 'primary', 50, 83.46);
INSERT INTO cache_records (weight, region, rank, ratio) VALUES (90.44, 'stable', 91, 90.55);
