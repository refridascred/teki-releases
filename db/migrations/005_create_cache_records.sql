-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    owner TEXT NOT NULL,
    score REAL NOT NULL DEFAULT 0,
    count INTEGER NOT NULL DEFAULT 0,
    ratio REAL,
    active INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX IF NOT EXISTS idx_cache_records_owner ON cache_records (owner);

INSERT INTO cache_records (owner, score, count, ratio, active) VALUES ('standard', 88.55, 55, 96.69, 48);
INSERT INTO cache_records (owner, score, count, ratio, active) VALUES ('latest', 61.01, 57, 36.59, 24);
INSERT INTO cache_records (owner, score, count, ratio, active) VALUES ('legacy', 17.47, 71, 51.64, 67);
