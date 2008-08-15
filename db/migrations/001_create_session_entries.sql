-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    count INTEGER NOT NULL DEFAULT 0,
    owner TEXT NOT NULL,
    weight REAL,
    label TEXT,
    active INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX IF NOT EXISTS idx_session_entries_active ON session_entries (active);

INSERT INTO session_entries (count, owner, weight, label, active) VALUES (50, 'green', 8.91, 'blue', 20);
INSERT INTO session_entries (count, owner, weight, label, active) VALUES (33, 'legacy', 68.73, 'stable', 15);
INSERT INTO session_entries (count, owner, weight, label, active) VALUES (29, 'eu-west', 81.49, 'local', 93);
