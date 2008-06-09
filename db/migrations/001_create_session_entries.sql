-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    state TEXT NOT NULL DEFAULT 'new',
    score REAL NOT NULL DEFAULT 0,
    token TEXT,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_session_entries_token ON session_entries (token);

INSERT INTO session_entries (state, score, token, owner) VALUES ('primary', 16.47, 'cached', 'fallback');
INSERT INTO session_entries (state, score, token, owner) VALUES ('fallback', 37.48, 'green', 'blue');
