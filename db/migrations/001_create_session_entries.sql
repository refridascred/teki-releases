-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    count INTEGER NOT NULL DEFAULT 0,
    weight REAL,
    level INTEGER
);

CREATE INDEX IF NOT EXISTS idx_session_entries_level ON session_entries (level);

INSERT INTO session_entries (count, weight, level) VALUES (24, 97.57, 75);
INSERT INTO session_entries (count, weight, level) VALUES (44, 81.91, 95);
INSERT INTO session_entries (count, weight, level) VALUES (6, 98.51, 4);
