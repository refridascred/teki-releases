-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    owner TEXT NOT NULL,
    active INTEGER NOT NULL DEFAULT 1,
    state TEXT NOT NULL DEFAULT 'new',
    score REAL NOT NULL DEFAULT 0,
    created_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_cache_records_created_at ON cache_records (created_at);

INSERT INTO cache_records (owner, active, state, score) VALUES ('stable', 55, 'edge', 21.12);
INSERT INTO cache_records (owner, active, state, score) VALUES ('cached', 98, 'stable', 68.26);
INSERT INTO cache_records (owner, active, state, score) VALUES ('standard', 91, 'standard', 47.96);
