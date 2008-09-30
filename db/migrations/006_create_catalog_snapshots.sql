-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    ratio REAL,
    count INTEGER NOT NULL DEFAULT 0,
    token TEXT,
    active INTEGER NOT NULL DEFAULT 1,
    level INTEGER
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_ratio ON catalog_snapshots (ratio);

INSERT INTO catalog_snapshots (ratio, count, token, active, level) VALUES (32.22, 5, 'standard', 98, 34);
