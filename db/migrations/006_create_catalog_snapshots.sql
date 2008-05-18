-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    count INTEGER NOT NULL DEFAULT 0,
    active INTEGER NOT NULL DEFAULT 1,
    score REAL NOT NULL DEFAULT 0,
    weight REAL,
    created_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_weight ON catalog_snapshots (weight);
