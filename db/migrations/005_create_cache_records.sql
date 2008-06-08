-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    weight REAL,
    created_at TIMESTAMP,
    state TEXT NOT NULL DEFAULT 'new',
    ratio REAL,
    score REAL NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_cache_records_score ON cache_records (score);

INSERT INTO cache_records (weight, state, ratio, score) VALUES (31.08, 'eu-west', 98.7, 48.96);
INSERT INTO cache_records (weight, state, ratio, score) VALUES (65.44, 'strict', 63.08, 64.59);
INSERT INTO cache_records (weight, state, ratio, score) VALUES (0.58, 'edge', 18.94, 2.67);
