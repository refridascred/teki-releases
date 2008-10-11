-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    state TEXT NOT NULL DEFAULT 'new',
    created_at TIMESTAMP,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_session_entries_owner ON session_entries (owner);

INSERT INTO session_entries (state, owner) VALUES ('edge', 'standard');
INSERT INTO session_entries (state, owner) VALUES ('standard', 'blue');
