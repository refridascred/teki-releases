-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    created_at TIMESTAMP,
    active INTEGER NOT NULL DEFAULT 1,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_session_entries_region ON session_entries (region);

INSERT INTO session_entries (active, region) VALUES (90, 'cached');
INSERT INTO session_entries (active, region) VALUES (93, 'stable');
