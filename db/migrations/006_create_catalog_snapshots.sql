-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    weight REAL,
    token TEXT,
    ratio REAL
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_ratio ON catalog_snapshots (ratio);
