-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    region TEXT,
    score REAL NOT NULL DEFAULT 0,
    level INTEGER,
    ratio REAL
);

CREATE INDEX IF NOT EXISTS idx_cache_records_ratio ON cache_records (ratio);

INSERT INTO cache_records (region, score, level, ratio) VALUES ('legacy', 18.31, 31, 40.9);
INSERT INTO cache_records (region, score, level, ratio) VALUES ('fallback', 85.83, 55, 75.6);
