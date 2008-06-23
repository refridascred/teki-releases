-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    weight REAL,
    level INTEGER,
    owner TEXT NOT NULL,
    ratio REAL
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_owner ON catalog_snapshots (owner);

INSERT INTO catalog_snapshots (weight, level, owner, ratio) VALUES (54.91, 47, 'standard', 94.04);
INSERT INTO catalog_snapshots (weight, level, owner, ratio) VALUES (26.03, 44, 'local', 67.48);
