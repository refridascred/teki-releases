-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    ratio REAL,
    label TEXT,
    region TEXT,
    count INTEGER NOT NULL DEFAULT 0,
    level INTEGER
);

CREATE INDEX IF NOT EXISTS idx_session_entries_level ON session_entries (level);

INSERT INTO session_entries (ratio, label, region, count, level) VALUES (36.28, 'green', 'local', 11, 10);
INSERT INTO session_entries (ratio, label, region, count, level) VALUES (93.36, 'fallback', 'cached', 65, 14);
INSERT INTO session_entries (ratio, label, region, count, level) VALUES (49.9, 'eu-west', 'fallback', 65, 98);
