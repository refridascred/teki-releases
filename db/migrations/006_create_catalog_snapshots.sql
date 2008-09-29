-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    state TEXT NOT NULL DEFAULT 'new',
    ratio REAL,
    active INTEGER NOT NULL DEFAULT 1,
    level INTEGER,
    token TEXT
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_state ON catalog_snapshots (state);

INSERT INTO catalog_snapshots (state, ratio, active, level, token) VALUES ('legacy', 13.48, 1, 87, 'green');
INSERT INTO catalog_snapshots (state, ratio, active, level, token) VALUES ('staging', 0.93, 71, 59, 'local');
