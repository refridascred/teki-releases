-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    active INTEGER NOT NULL DEFAULT 1,
    token TEXT,
    ratio REAL
);

CREATE INDEX IF NOT EXISTS idx_session_entries_token ON session_entries (token);

INSERT INTO session_entries (active, token, ratio) VALUES (11, 'blue', 15.49);
INSERT INTO session_entries (active, token, ratio) VALUES (69, 'latest', 60.58);
INSERT INTO session_entries (active, token, ratio) VALUES (57, 'fallback', 55.18);
