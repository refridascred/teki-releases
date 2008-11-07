-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    created_at TIMESTAMP,
    active INTEGER NOT NULL DEFAULT 1,
    state TEXT NOT NULL DEFAULT 'new'
);

CREATE INDEX IF NOT EXISTS idx_session_entries_active ON session_entries (active);

INSERT INTO session_entries (active, state) VALUES (78, 'fallback');
INSERT INTO session_entries (active, state) VALUES (98, 'local');
INSERT INTO session_entries (active, state) VALUES (25, 'green');
