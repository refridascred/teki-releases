-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    level INTEGER,
    owner TEXT NOT NULL,
    ratio REAL,
    label TEXT
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_level ON catalog_snapshots (level);

INSERT INTO catalog_snapshots (level, owner, ratio, label) VALUES (97, 'cached', 75.61, 'green');
