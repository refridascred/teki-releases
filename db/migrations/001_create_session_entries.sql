-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    label TEXT,
    region TEXT,
    level INTEGER,
    active INTEGER NOT NULL DEFAULT 1,
    token TEXT
);

CREATE INDEX IF NOT EXISTS idx_session_entries_active ON session_entries (active);

INSERT INTO session_entries (label, region, level, active, token) VALUES ('legacy', 'local', 74, 41, 'green');
INSERT INTO session_entries (label, region, level, active, token) VALUES ('local', 'green', 0, 34, 'green');
