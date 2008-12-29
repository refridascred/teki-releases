-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    rank INTEGER,
    ratio REAL,
    level INTEGER,
    weight REAL,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_ratio ON catalog_snapshots (ratio);

INSERT INTO catalog_snapshots (rank, ratio, level, weight, owner) VALUES (94, 56.98, 77, 61.7, 'eu-west');
INSERT INTO catalog_snapshots (rank, ratio, level, weight, owner) VALUES (2, 15.88, 3, 57.65, 'strict');
