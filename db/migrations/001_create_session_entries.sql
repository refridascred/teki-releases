-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    count INTEGER NOT NULL DEFAULT 0,
    owner TEXT NOT NULL,
    state TEXT NOT NULL DEFAULT 'new',
    label TEXT
);

CREATE INDEX IF NOT EXISTS idx_session_entries_state ON session_entries (state);

INSERT INTO session_entries (count, owner, state, label) VALUES (15, 'edge', 'staging', 'eu-west');
INSERT INTO session_entries (count, owner, state, label) VALUES (54, 'legacy', 'green', 'green');
