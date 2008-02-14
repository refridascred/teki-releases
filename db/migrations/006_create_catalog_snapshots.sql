-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    count INTEGER NOT NULL DEFAULT 0,
    state TEXT NOT NULL DEFAULT 'new',
    level INTEGER,
    active INTEGER NOT NULL DEFAULT 1,
    label TEXT
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_label ON catalog_snapshots (label);

INSERT INTO catalog_snapshots (count, state, level, active, label) VALUES (3, 'legacy', 15, 34, 'blue');
INSERT INTO catalog_snapshots (count, state, level, active, label) VALUES (20, 'strict', 69, 8, 'open');
