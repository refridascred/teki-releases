-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    created_at TIMESTAMP,
    active INTEGER NOT NULL DEFAULT 1,
    ratio REAL,
    state TEXT NOT NULL DEFAULT 'new',
    count INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_session_entries_active ON session_entries (active);

INSERT INTO session_entries (active, ratio, state, count) VALUES (50, 8.83, 'stable', 63);
INSERT INTO session_entries (active, ratio, state, count) VALUES (94, 27.46, 'strict', 4);
