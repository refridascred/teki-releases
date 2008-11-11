-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    rank INTEGER,
    score REAL NOT NULL DEFAULT 0,
    ratio REAL,
    label TEXT,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_owner ON catalog_snapshots (owner);

INSERT INTO catalog_snapshots (rank, score, ratio, label, owner) VALUES (68, 67.84, 86.97, 'blue', 'fallback');
INSERT INTO catalog_snapshots (rank, score, ratio, label, owner) VALUES (6, 7.19, 56.88, 'legacy', 'standard');
