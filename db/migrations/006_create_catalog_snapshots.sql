-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    token TEXT,
    region TEXT,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_region ON catalog_snapshots (region);
