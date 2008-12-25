-- Create the cache_records table.
CREATE TABLE IF NOT EXISTS cache_records (
    id INTEGER PRIMARY KEY,
    level INTEGER,
    state TEXT NOT NULL DEFAULT 'new',
    token TEXT,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_cache_records_token ON cache_records (token);

INSERT INTO cache_records (level, state, token, owner) VALUES (65, 'local', 'standard', 'eu-west');
