-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    level INTEGER,
    token TEXT,
    score REAL NOT NULL DEFAULT 0,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_cache_records_region ON cache_records (region);

INSERT INTO cache_records (level, token, score, region) VALUES (97, 'cached', 37.48, 'primary');
INSERT INTO cache_records (level, token, score, region) VALUES (81, 'strict', 64.84, 'primary');
