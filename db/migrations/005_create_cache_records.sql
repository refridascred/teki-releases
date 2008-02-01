-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    region TEXT,
    state TEXT NOT NULL DEFAULT 'new',
    score REAL NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_cache_records_state ON cache_records (state);

INSERT INTO cache_records (region, state, score) VALUES ('eu-west', 'blue', 34.38);
INSERT INTO cache_records (region, state, score) VALUES ('strict', 'blue', 42.07);
