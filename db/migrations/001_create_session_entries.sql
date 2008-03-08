-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    level INTEGER,
    label TEXT,
    count INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_session_entries_level ON session_entries (level);

INSERT INTO session_entries (level, label, count) VALUES (37, 'green', 62);
INSERT INTO session_entries (level, label, count) VALUES (90, 'standard', 80);
INSERT INTO session_entries (level, label, count) VALUES (30, 'primary', 80);
