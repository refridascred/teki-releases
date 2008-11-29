-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    weight REAL,
    ratio REAL,
    created_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_cache_records_created_at ON cache_records (created_at);

INSERT INTO cache_records (weight, ratio) VALUES (55.37, 27.81);
INSERT INTO cache_records (weight, ratio) VALUES (72.5, 44.28);
INSERT INTO cache_records (weight, ratio) VALUES (4.92, 27.9);
