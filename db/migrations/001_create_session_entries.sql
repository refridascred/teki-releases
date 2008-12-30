-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    score REAL NOT NULL DEFAULT 0,
    weight REAL,
    level INTEGER,
    state TEXT NOT NULL DEFAULT 'new',
    created_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_session_entries_score ON session_entries (score);

INSERT INTO session_entries (score, weight, level, state) VALUES (71.0, 78.12, 31, 'standard');
INSERT INTO session_entries (score, weight, level, state) VALUES (59.91, 61.69, 92, 'fallback');
