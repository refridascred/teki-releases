-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    region TEXT,
    state TEXT NOT NULL DEFAULT 'new',
    count INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_cache_records_region ON cache_records (region);

INSERT INTO cache_records (region, state, count, owner) VALUES ('blue', 'eu-west', 76, 'primary');
INSERT INTO cache_records (region, state, count, owner) VALUES ('edge', 'latest', 93, 'green');
INSERT INTO cache_records (region, state, count, owner) VALUES ('fallback', 'stable', 42, 'stable');
