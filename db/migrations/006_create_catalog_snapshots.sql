-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    rank INTEGER,
    level INTEGER,
    active INTEGER NOT NULL DEFAULT 1,
    score REAL NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_level ON catalog_snapshots (level);

INSERT INTO catalog_snapshots (rank, level, active, score) VALUES (3, 10, 69, 74.77);
INSERT INTO catalog_snapshots (rank, level, active, score) VALUES (37, 6, 32, 78.63);
