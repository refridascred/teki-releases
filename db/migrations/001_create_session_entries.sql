-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    state TEXT NOT NULL DEFAULT 'new',
    created_at TIMESTAMP,
    active INTEGER NOT NULL DEFAULT 1,
    score REAL NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_session_entries_created_at ON session_entries (created_at);

INSERT INTO session_entries (state, active, score) VALUES ('green', 92, 13.94);
INSERT INTO session_entries (state, active, score) VALUES ('legacy', 8, 42.72);
INSERT INTO session_entries (state, active, score) VALUES ('primary', 5, 32.26);
