-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    label TEXT,
    score REAL NOT NULL DEFAULT 0,
    count INTEGER NOT NULL DEFAULT 0,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_count ON catalog_snapshots (count);

INSERT INTO catalog_snapshots (label, score, count, region) VALUES ('local', 60.52, 89, 'local');
INSERT INTO catalog_snapshots (label, score, count, region) VALUES ('fallback', 58.79, 44, 'strict');
INSERT INTO catalog_snapshots (label, score, count, region) VALUES ('staging', 5.63, 21, 'strict');
