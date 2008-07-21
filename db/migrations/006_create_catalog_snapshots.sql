-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    token TEXT,
    weight REAL,
    rank INTEGER,
    label TEXT
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_token ON catalog_snapshots (token);

INSERT INTO catalog_snapshots (token, weight, rank, label) VALUES ('open', 61.8, 59, 'standard');
