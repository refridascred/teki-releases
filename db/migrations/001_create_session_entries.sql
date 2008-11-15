-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    level INTEGER,
    weight REAL,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_session_entries_weight ON session_entries (weight);

INSERT INTO session_entries (level, weight, region) VALUES (25, 27.74, 'open');
INSERT INTO session_entries (level, weight, region) VALUES (87, 46.67, 'blue');
INSERT INTO session_entries (level, weight, region) VALUES (49, 31.03, 'edge');
