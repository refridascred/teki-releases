-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    count INTEGER NOT NULL DEFAULT 0,
    region TEXT,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_session_entries_region ON session_entries (region);

INSERT INTO session_entries (count, region, owner) VALUES (95, 'latest', 'blue');
