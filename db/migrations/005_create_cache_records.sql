-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    created_at TIMESTAMP,
    state TEXT NOT NULL DEFAULT 'new',
    rank INTEGER,
    weight REAL
);

CREATE INDEX IF NOT EXISTS idx_cache_records_rank ON cache_records (rank);

INSERT INTO cache_records (state, rank, weight) VALUES ('cached', 30, 24.59);
INSERT INTO cache_records (state, rank, weight) VALUES ('edge', 55, 77.29);
INSERT INTO cache_records (state, rank, weight) VALUES ('stable', 75, 83.37);
