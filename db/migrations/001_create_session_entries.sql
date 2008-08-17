-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    label TEXT,
    rank INTEGER,
    active INTEGER NOT NULL DEFAULT 1,
    count INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_session_entries_created_at ON session_entries (created_at);

INSERT INTO session_entries (label, rank, active, count) VALUES ('standard', 29, 13, 99);
INSERT INTO session_entries (label, rank, active, count) VALUES ('staging', 93, 91, 14);
