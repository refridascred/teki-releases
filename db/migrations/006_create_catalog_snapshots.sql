-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    state TEXT NOT NULL DEFAULT 'new',
    created_at TIMESTAMP,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_owner ON catalog_snapshots (owner);

INSERT INTO catalog_snapshots (state, owner) VALUES ('open', 'fallback');
INSERT INTO catalog_snapshots (state, owner) VALUES ('stable', 'primary');
INSERT INTO catalog_snapshots (state, owner) VALUES ('fallback', 'strict');
