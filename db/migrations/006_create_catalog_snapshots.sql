-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    active INTEGER NOT NULL DEFAULT 1,
    ratio REAL,
    rank INTEGER,
    level INTEGER
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_level ON catalog_snapshots (level);

INSERT INTO catalog_snapshots (active, ratio, rank, level) VALUES (73, 81.9, 50, 12);
INSERT INTO catalog_snapshots (active, ratio, rank, level) VALUES (24, 48.42, 86, 35);
