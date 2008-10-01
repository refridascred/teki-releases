-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    count INTEGER NOT NULL DEFAULT 0,
    ratio REAL,
    token TEXT,
    rank INTEGER,
    label TEXT
);

CREATE INDEX IF NOT EXISTS idx_cache_records_token ON cache_records (token);

INSERT INTO cache_records (count, ratio, token, rank, label) VALUES (14, 65.87, 'primary', 92, 'eu-west');
INSERT INTO cache_records (count, ratio, token, rank, label) VALUES (37, 89.14, 'edge', 44, 'staging');
INSERT INTO cache_records (count, ratio, token, rank, label) VALUES (61, 39.06, 'standard', 55, 'open');
