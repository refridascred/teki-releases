-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    region TEXT,
    level INTEGER,
    count INTEGER NOT NULL DEFAULT 0,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_session_entries_level ON session_entries (level);

INSERT INTO session_entries (region, level, count, owner) VALUES ('open', 22, 90, 'stable');
INSERT INTO session_entries (region, level, count, owner) VALUES ('staging', 92, 96, 'strict');
INSERT INTO session_entries (region, level, count, owner) VALUES ('eu-west', 4, 72, 'local');
