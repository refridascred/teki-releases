-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    token TEXT,
    weight REAL,
    ratio REAL,
    active INTEGER NOT NULL DEFAULT 1,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_cache_records_weight ON cache_records (weight);

INSERT INTO cache_records (token, weight, ratio, active, owner) VALUES ('open', 68.79, 25.02, 26, 'blue');
