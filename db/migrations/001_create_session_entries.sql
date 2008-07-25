-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    token TEXT,
    level INTEGER,
    score REAL NOT NULL DEFAULT 0,
    weight REAL,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_session_entries_level ON session_entries (level);

INSERT INTO session_entries (token, level, score, weight, region) VALUES ('primary', 33, 3.45, 1.17, 'blue');
