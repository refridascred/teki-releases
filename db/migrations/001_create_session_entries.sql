-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    owner TEXT NOT NULL,
    created_at TIMESTAMP,
    region TEXT,
    token TEXT
);

CREATE INDEX IF NOT EXISTS idx_session_entries_created_at ON session_entries (created_at);
