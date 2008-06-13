-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    active INTEGER NOT NULL DEFAULT 1,
    region TEXT,
    score REAL NOT NULL DEFAULT 0,
    weight REAL
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_region ON catalog_snapshots (region);

INSERT INTO catalog_snapshots (active, region, score, weight) VALUES (64, 'latest', 39.84, 8.63);
INSERT INTO catalog_snapshots (active, region, score, weight) VALUES (84, 'standard', 3.0, 85.12);
