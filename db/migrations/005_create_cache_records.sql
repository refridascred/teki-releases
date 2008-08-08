-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    region TEXT,
    created_at TIMESTAMP,
    weight REAL,
    owner TEXT NOT NULL,
    level INTEGER
);

CREATE INDEX IF NOT EXISTS idx_cache_records_created_at ON cache_records (created_at);

INSERT INTO cache_records (region, weight, owner, level) VALUES ('open', 81.89, 'local', 24);
INSERT INTO cache_records (region, weight, owner, level) VALUES ('eu-west', 28.0, 'cached', 23);
INSERT INTO cache_records (region, weight, owner, level) VALUES ('fallback', 98.41, 'legacy', 75);
