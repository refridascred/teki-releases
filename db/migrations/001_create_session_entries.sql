-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    ratio REAL,
    active INTEGER NOT NULL DEFAULT 1,
    score REAL NOT NULL DEFAULT 0,
    count INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_session_entries_score ON session_entries (score);

INSERT INTO session_entries (ratio, active, score, count) VALUES (79.73, 3, 31.91, 25);
INSERT INTO session_entries (ratio, active, score, count) VALUES (70.0, 97, 44.36, 96);
INSERT INTO session_entries (ratio, active, score, count) VALUES (79.05, 52, 43.62, 86);
