-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    state TEXT NOT NULL DEFAULT 'new',
    owner TEXT NOT NULL,
    token TEXT,
    rank INTEGER,
    created_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_created_at ON catalog_snapshots (created_at);

INSERT INTO catalog_snapshots (state, owner, token, rank) VALUES ('latest', 'staging', 'primary', 60);
INSERT INTO catalog_snapshots (state, owner, token, rank) VALUES ('stable', 'eu-west', 'eu-west', 95);
