-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    created_at TIMESTAMP,
    count INTEGER NOT NULL DEFAULT 0,
    state TEXT NOT NULL DEFAULT 'new',
    rank INTEGER
);

CREATE INDEX IF NOT EXISTS idx_cache_records_created_at ON cache_records (created_at);

INSERT INTO cache_records (count, state, rank) VALUES (94, 'legacy', 77);
INSERT INTO cache_records (count, state, rank) VALUES (10, 'local', 62);
INSERT INTO cache_records (count, state, rank) VALUES (63, 'legacy', 21);
