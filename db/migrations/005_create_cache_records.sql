-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    created_at TIMESTAMP,
    state TEXT NOT NULL DEFAULT 'new',
    level INTEGER
);

CREATE INDEX IF NOT EXISTS idx_cache_records_level ON cache_records (level);

INSERT INTO cache_records (state, level) VALUES ('fallback', 37);
INSERT INTO cache_records (state, level) VALUES ('primary', 36);
INSERT INTO cache_records (state, level) VALUES ('cached', 35);
