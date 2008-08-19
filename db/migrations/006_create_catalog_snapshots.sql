-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    label TEXT,
    owner TEXT NOT NULL,
    region TEXT,
    active INTEGER NOT NULL DEFAULT 1,
    level INTEGER
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_label ON catalog_snapshots (label);

INSERT INTO catalog_snapshots (label, owner, region, active, level) VALUES ('latest', 'strict', 'open', 53, 53);
