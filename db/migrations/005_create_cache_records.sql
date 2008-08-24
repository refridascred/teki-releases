-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    rank INTEGER,
    active INTEGER NOT NULL DEFAULT 1,
    level INTEGER,
    ratio REAL,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_cache_records_level ON cache_records (level);

INSERT INTO cache_records (rank, active, level, ratio, owner) VALUES (31, 61, 38, 73.29, 'blue');
INSERT INTO cache_records (rank, active, level, ratio, owner) VALUES (30, 16, 13, 40.34, 'green');
