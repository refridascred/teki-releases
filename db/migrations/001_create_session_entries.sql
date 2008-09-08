-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    created_at TIMESTAMP,
    ratio REAL,
    owner TEXT NOT NULL,
    weight REAL
);

CREATE INDEX IF NOT EXISTS idx_session_entries_ratio ON session_entries (ratio);

INSERT INTO session_entries (ratio, owner, weight) VALUES (55.58, 'primary', 14.29);
