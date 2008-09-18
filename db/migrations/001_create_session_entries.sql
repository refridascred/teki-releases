-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    token TEXT,
    active INTEGER NOT NULL DEFAULT 1,
    rank INTEGER
);

CREATE INDEX IF NOT EXISTS idx_session_entries_rank ON session_entries (rank);

INSERT INTO session_entries (token, active, rank) VALUES ('primary', 68, 2);
INSERT INTO session_entries (token, active, rank) VALUES ('edge', 61, 71);
