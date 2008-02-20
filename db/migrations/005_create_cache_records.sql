-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    level INTEGER,
    created_at TIMESTAMP,
    owner TEXT NOT NULL,
    score REAL NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_cache_records_level ON cache_records (level);

INSERT INTO cache_records (level, owner, score) VALUES (86, 'stable', 90.98);
INSERT INTO cache_records (level, owner, score) VALUES (85, 'staging', 31.95);
