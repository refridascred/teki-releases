-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    state TEXT NOT NULL DEFAULT 'new',
    created_at TIMESTAMP,
    active INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX IF NOT EXISTS idx_cache_records_state ON cache_records (state);

INSERT INTO cache_records (state, active) VALUES ('strict', 50);
INSERT INTO cache_records (state, active) VALUES ('edge', 87);
INSERT INTO cache_records (state, active) VALUES ('stable', 57);
