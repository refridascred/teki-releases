-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    ratio REAL,
    token TEXT,
    count INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_session_entries_ratio ON session_entries (ratio);

INSERT INTO session_entries (ratio, token, count) VALUES (94.11, 'green', 56);
INSERT INTO session_entries (ratio, token, count) VALUES (2.76, 'staging', 80);
