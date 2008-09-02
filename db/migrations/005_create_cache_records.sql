-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    owner TEXT NOT NULL,
    rank INTEGER,
    token TEXT
);

CREATE INDEX IF NOT EXISTS idx_cache_records_owner ON cache_records (owner);

INSERT INTO cache_records (owner, rank, token) VALUES ('legacy', 31, 'fallback');
