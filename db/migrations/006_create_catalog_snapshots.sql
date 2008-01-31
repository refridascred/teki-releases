-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    region TEXT,
    weight REAL,
    created_at TIMESTAMP,
    label TEXT
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_label ON catalog_snapshots (label);

INSERT INTO catalog_snapshots (region, weight, label) VALUES ('green', 14.6, 'local');
