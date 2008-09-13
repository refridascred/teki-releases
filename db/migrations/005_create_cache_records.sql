-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    weight REAL,
    score REAL NOT NULL DEFAULT 0,
    state TEXT NOT NULL DEFAULT 'new',
    level INTEGER,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_cache_records_level ON cache_records (level);

INSERT INTO cache_records (weight, score, state, level, region) VALUES (35.92, 87.74, 'latest', 62, 'legacy');
