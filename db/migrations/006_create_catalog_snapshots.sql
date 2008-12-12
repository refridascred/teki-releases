-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    score REAL NOT NULL DEFAULT 0,
    state TEXT NOT NULL DEFAULT 'new',
    region TEXT,
    token TEXT,
    rank INTEGER
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_state ON catalog_snapshots (state);
