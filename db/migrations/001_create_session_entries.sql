-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    state TEXT NOT NULL DEFAULT 'new',
    rank INTEGER,
    token TEXT,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_session_entries_owner ON session_entries (owner);

INSERT INTO session_entries (state, rank, token, owner) VALUES ('edge', 90, 'cached', 'standard');
INSERT INTO session_entries (state, rank, token, owner) VALUES ('strict', 74, 'fallback', 'legacy');
INSERT INTO session_entries (state, rank, token, owner) VALUES ('green', 56, 'legacy', 'eu-west');
