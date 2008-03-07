-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    rank INTEGER,
    region TEXT,
    weight REAL,
    state TEXT NOT NULL DEFAULT 'new',
    score REAL NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_score ON catalog_snapshots (score);

INSERT INTO catalog_snapshots (rank, region, weight, state, score) VALUES (80, 'cached', 83.56, 'stable', 95.77);
INSERT INTO catalog_snapshots (rank, region, weight, state, score) VALUES (7, 'primary', 21.95, 'strict', 16.74);
