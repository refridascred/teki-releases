-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    score REAL NOT NULL DEFAULT 0,
    label TEXT,
    region TEXT,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_owner ON catalog_snapshots (owner);

INSERT INTO catalog_snapshots (score, label, region, owner) VALUES (36.59, 'blue', 'cached', 'latest');
INSERT INTO catalog_snapshots (score, label, region, owner) VALUES (62.51, 'eu-west', 'cached', 'local');
