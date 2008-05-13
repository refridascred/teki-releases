-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    score REAL NOT NULL DEFAULT 0,
    label TEXT,
    rank INTEGER
);

CREATE INDEX IF NOT EXISTS idx_session_entries_score ON session_entries (score);

INSERT INTO session_entries (score, label, rank) VALUES (9.92, 'staging', 16);
INSERT INTO session_entries (score, label, rank) VALUES (24.41, 'fallback', 80);
