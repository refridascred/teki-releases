-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    token TEXT,
    active INTEGER NOT NULL DEFAULT 1,
    rank INTEGER,
    ratio REAL
);

CREATE INDEX IF NOT EXISTS idx_cache_records_rank ON cache_records (rank);

INSERT INTO cache_records (token, active, rank, ratio) VALUES ('local', 83, 12, 67.2);
INSERT INTO cache_records (token, active, rank, ratio) VALUES ('fallback', 29, 90, 77.36);
