-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    token TEXT,
    rank INTEGER,
    state TEXT NOT NULL DEFAULT 'new'
);

CREATE INDEX IF NOT EXISTS idx_session_entries_rank ON session_entries (rank);

INSERT INTO session_entries (token, rank, state) VALUES ('strict', 56, 'legacy');
INSERT INTO session_entries (token, rank, state) VALUES ('stable', 23, 'stable');
INSERT INTO session_entries (token, rank, state) VALUES ('primary', 46, 'open');
