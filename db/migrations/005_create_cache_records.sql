-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    owner TEXT NOT NULL,
    ratio REAL,
    active INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX IF NOT EXISTS idx_cache_records_active ON cache_records (active);

INSERT INTO cache_records (owner, ratio, active) VALUES ('fallback', 80.84, 46);
INSERT INTO cache_records (owner, ratio, active) VALUES ('latest', 90.71, 11);
INSERT INTO cache_records (owner, ratio, active) VALUES ('local', 80.73, 22);
