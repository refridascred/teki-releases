-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    active INTEGER NOT NULL DEFAULT 1,
    state TEXT NOT NULL DEFAULT 'new',
    token TEXT,
    score REAL NOT NULL DEFAULT 0,
    label TEXT
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_label ON catalog_snapshots (label);

INSERT INTO catalog_snapshots (active, state, token, score, label) VALUES (49, 'cached', 'local', 12.29, 'fallback');
