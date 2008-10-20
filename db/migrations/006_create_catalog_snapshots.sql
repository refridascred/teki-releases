-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    active INTEGER NOT NULL DEFAULT 1,
    state TEXT NOT NULL DEFAULT 'new',
    count INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_state ON catalog_snapshots (state);

INSERT INTO catalog_snapshots (active, state, count) VALUES (85, 'open', 32);
INSERT INTO catalog_snapshots (active, state, count) VALUES (16, 'latest', 51);
INSERT INTO catalog_snapshots (active, state, count) VALUES (79, 'edge', 15);
