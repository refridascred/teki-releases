-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    region TEXT,
    token TEXT,
    active INTEGER NOT NULL DEFAULT 1,
    owner TEXT NOT NULL,
    label TEXT
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_region ON catalog_snapshots (region);

INSERT INTO catalog_snapshots (region, token, active, owner, label) VALUES ('open', 'green', 40, 'staging', 'standard');
