-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    label TEXT,
    region TEXT,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_region ON catalog_snapshots (region);

INSERT INTO catalog_snapshots (label, region, owner) VALUES ('green', 'green', 'latest');
INSERT INTO catalog_snapshots (label, region, owner) VALUES ('open', 'primary', 'strict');
INSERT INTO catalog_snapshots (label, region, owner) VALUES ('standard', 'open', 'staging');
