-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    region TEXT,
    score REAL NOT NULL DEFAULT 0,
    state TEXT NOT NULL DEFAULT 'new'
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_state ON catalog_snapshots (state);

INSERT INTO catalog_snapshots (region, score, state) VALUES ('local', 79.65, 'staging');
INSERT INTO catalog_snapshots (region, score, state) VALUES ('stable', 19.78, 'eu-west');
INSERT INTO catalog_snapshots (region, score, state) VALUES ('staging', 3.14, 'eu-west');
