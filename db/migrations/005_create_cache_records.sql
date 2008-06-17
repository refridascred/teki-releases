-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    region TEXT,
    rank INTEGER,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_cache_records_owner ON cache_records (owner);

INSERT INTO cache_records (region, rank, owner) VALUES ('edge', 60, 'staging');
INSERT INTO cache_records (region, rank, owner) VALUES ('cached', 32, 'stable');
INSERT INTO cache_records (region, rank, owner) VALUES ('local', 54, 'blue');
