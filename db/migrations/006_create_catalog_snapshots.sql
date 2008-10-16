-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    created_at TIMESTAMP,
    owner TEXT NOT NULL,
    ratio REAL,
    level INTEGER
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_owner ON catalog_snapshots (owner);

INSERT INTO catalog_snapshots (owner, ratio, level) VALUES ('edge', 77.11, 81);
