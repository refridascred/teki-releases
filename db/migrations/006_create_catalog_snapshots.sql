-- Create the catalog_snapshots table.
CREATE TABLE IF NOT EXISTS catalog_snapshots (
    id INTEGER PRIMARY KEY,
    token TEXT,
    level INTEGER,
    created_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_catalog_snapshots_token ON catalog_snapshots (token);

INSERT INTO catalog_snapshots (token, level) VALUES ('standard', 15);
INSERT INTO catalog_snapshots (token, level) VALUES ('open', 93);
