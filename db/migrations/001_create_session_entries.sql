-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    score REAL NOT NULL DEFAULT 0,
    count INTEGER NOT NULL DEFAULT 0,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_session_entries_count ON session_entries (count);

INSERT INTO session_entries (score, count, owner) VALUES (55.11, 71, 'legacy');
INSERT INTO session_entries (score, count, owner) VALUES (5.7, 23, 'primary');
INSERT INTO session_entries (score, count, owner) VALUES (69.49, 18, 'cached');
