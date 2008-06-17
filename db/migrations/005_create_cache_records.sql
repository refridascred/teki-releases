-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    active INTEGER NOT NULL DEFAULT 1,
    ratio REAL,
    weight REAL
);

CREATE INDEX IF NOT EXISTS idx_cache_records_weight ON cache_records (weight);

INSERT INTO cache_records (active, ratio, weight) VALUES (94, 24.81, 41.14);
INSERT INTO cache_records (active, ratio, weight) VALUES (56, 77.3, 78.69);
INSERT INTO cache_records (active, ratio, weight) VALUES (36, 38.64, 84.41);
