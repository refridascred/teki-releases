-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    owner TEXT NOT NULL,
    rank INTEGER,
    level INTEGER
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_owner ON catalog_snapshots (owner);

INSERT INTO catalog_snapshots (owner, rank, level) VALUES ('cached', 21, 81);
