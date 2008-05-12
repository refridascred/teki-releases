-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    score REAL NOT NULL DEFAULT 0,
    count INTEGER NOT NULL DEFAULT 0,
    ratio REAL
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_count ON catalog_snapshots (count);

INSERT INTO catalog_snapshots (score, count, ratio) VALUES (85.83, 10, 20.21);
INSERT INTO catalog_snapshots (score, count, ratio) VALUES (75.75, 83, 49.89);
INSERT INTO catalog_snapshots (score, count, ratio) VALUES (30.7, 21, 75.99);
