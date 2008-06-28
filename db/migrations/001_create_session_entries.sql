-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    state TEXT NOT NULL DEFAULT 'new',
    owner TEXT NOT NULL,
    token TEXT,
    count INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_session_entries_token ON session_entries (token);

INSERT INTO session_entries (state, owner, token, count) VALUES ('primary', 'fallback', 'primary', 20);
INSERT INTO session_entries (state, owner, token, count) VALUES ('fallback', 'fallback', 'staging', 16);
INSERT INTO session_entries (state, owner, token, count) VALUES ('staging', 'primary', 'fallback', 94);
