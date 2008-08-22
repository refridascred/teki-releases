-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    level INTEGER,
    ratio REAL,
    weight REAL,
    score REAL NOT NULL DEFAULT 0,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_session_entries_region ON session_entries (region);

INSERT INTO session_entries (level, ratio, weight, score, region) VALUES (3, 22.68, 18.44, 3.3, 'edge');
