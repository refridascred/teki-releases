-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    count INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP,
    region TEXT,
    state TEXT NOT NULL DEFAULT 'new'
);

CREATE INDEX IF NOT EXISTS idx_session_entries_count ON session_entries (count);

INSERT INTO session_entries (count, region, state) VALUES (27, 'eu-west', 'staging');
INSERT INTO session_entries (count, region, state) VALUES (39, 'standard', 'open');
INSERT INTO session_entries (count, region, state) VALUES (15, 'latest', 'stable');
