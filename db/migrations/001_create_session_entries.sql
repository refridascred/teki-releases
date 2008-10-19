-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    weight REAL,
    level INTEGER,
    owner TEXT NOT NULL,
    label TEXT
);

CREATE INDEX IF NOT EXISTS idx_session_entries_level ON session_entries (level);

INSERT INTO session_entries (weight, level, owner, label) VALUES (70.74, 63, 'fallback', 'legacy');
INSERT INTO session_entries (weight, level, owner, label) VALUES (59.91, 58, 'strict', 'local');
INSERT INTO session_entries (weight, level, owner, label) VALUES (74.7, 37, 'open', 'stable');
