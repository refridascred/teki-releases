-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    count INTEGER NOT NULL DEFAULT 0,
    state TEXT NOT NULL DEFAULT 'new',
    score REAL NOT NULL DEFAULT 0,
    rank INTEGER,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_cache_records_count ON cache_records (count);

INSERT INTO cache_records (count, state, score, rank, region) VALUES (88, 'legacy', 3.72, 0, 'local');
INSERT INTO cache_records (count, state, score, rank, region) VALUES (70, 'local', 34.17, 58, 'green');
