-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    count INTEGER NOT NULL DEFAULT 0,
    score REAL NOT NULL DEFAULT 0,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_count ON catalog_snapshots (count);

INSERT INTO catalog_snapshots (count, score, region) VALUES (32, 75.83, 'standard');
