-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    rank INTEGER,
    count INTEGER NOT NULL DEFAULT 0,
    weight REAL,
    score REAL NOT NULL DEFAULT 0,
    active INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX IF NOT EXISTS idx_session_entries_score ON session_entries (score);

INSERT INTO session_entries (rank, count, weight, score, active) VALUES (97, 98, 16.56, 34.5, 0);
INSERT INTO session_entries (rank, count, weight, score, active) VALUES (90, 60, 29.21, 34.37, 18);
INSERT INTO session_entries (rank, count, weight, score, active) VALUES (92, 49, 1.42, 85.37, 11);
