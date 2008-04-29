-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    active INTEGER NOT NULL DEFAULT 1,
    weight REAL,
    state TEXT NOT NULL DEFAULT 'new',
    label TEXT,
    rank INTEGER
);

CREATE INDEX IF NOT EXISTS idx_session_entries_label ON session_entries (label);

INSERT INTO session_entries (active, weight, state, label, rank) VALUES (40, 80.74, 'standard', 'latest', 36);
