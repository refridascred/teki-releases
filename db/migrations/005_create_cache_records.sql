-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    level INTEGER,
    label TEXT,
    ratio REAL,
    owner TEXT NOT NULL,
    state TEXT NOT NULL DEFAULT 'new'
);

CREATE INDEX IF NOT EXISTS idx_cache_records_level ON cache_records (level);

INSERT INTO cache_records (level, label, ratio, owner, state) VALUES (26, 'standard', 70.49, 'latest', 'latest');
