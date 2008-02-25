-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    state TEXT NOT NULL DEFAULT 'new',
    created_at TIMESTAMP,
    level INTEGER,
    owner TEXT NOT NULL,
    label TEXT
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_owner ON catalog_snapshots (owner);

INSERT INTO catalog_snapshots (state, level, owner, label) VALUES ('open', 20, 'primary', 'primary');
INSERT INTO catalog_snapshots (state, level, owner, label) VALUES ('staging', 56, 'stable', 'latest');
INSERT INTO catalog_snapshots (state, level, owner, label) VALUES ('fallback', 52, 'legacy', 'green');
