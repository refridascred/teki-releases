-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    owner TEXT NOT NULL,
    ratio REAL,
    score REAL NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_score ON catalog_snapshots (score);

INSERT INTO catalog_snapshots (owner, ratio, score) VALUES ('edge', 44.94, 86.05);
