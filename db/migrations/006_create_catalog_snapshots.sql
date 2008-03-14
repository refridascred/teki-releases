-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    state TEXT NOT NULL DEFAULT 'new',
    weight REAL,
    region TEXT,
    active INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_region ON catalog_snapshots (region);

INSERT INTO catalog_snapshots (state, weight, region, active) VALUES ('cached', 36.68, 'standard', 76);
