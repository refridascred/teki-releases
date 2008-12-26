-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    rank INTEGER,
    level INTEGER,
    token TEXT
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_level ON catalog_snapshots (level);
