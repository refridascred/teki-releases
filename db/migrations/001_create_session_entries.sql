-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    score REAL NOT NULL DEFAULT 0,
    owner TEXT NOT NULL,
    level INTEGER,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_session_entries_score ON session_entries (score);

INSERT INTO session_entries (score, owner, level, region) VALUES (84.58, 'stable', 87, 'primary');
INSERT INTO session_entries (score, owner, level, region) VALUES (63.81, 'fallback', 89, 'stable');
