-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    score REAL NOT NULL DEFAULT 0,
    rank INTEGER,
    level INTEGER,
    active INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_cache_records_created_at ON cache_records (created_at);

INSERT INTO cache_records (score, rank, level, active) VALUES (14.68, 46, 84, 15);
INSERT INTO cache_records (score, rank, level, active) VALUES (22.91, 89, 33, 42);
