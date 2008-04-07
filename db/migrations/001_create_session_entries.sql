-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    weight REAL,
    count INTEGER NOT NULL DEFAULT 0,
    region TEXT,
    state TEXT NOT NULL DEFAULT 'new',
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_session_entries_count ON session_entries (count);

INSERT INTO session_entries (weight, count, region, state, owner) VALUES (97.36, 0, 'fallback', 'legacy', 'edge');
INSERT INTO session_entries (weight, count, region, state, owner) VALUES (38.84, 0, 'eu-west', 'stable', 'primary');
