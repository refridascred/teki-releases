-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    state TEXT NOT NULL DEFAULT 'new',
    created_at TIMESTAMP,
    region TEXT,
    ratio REAL,
    level INTEGER
);

CREATE INDEX IF NOT EXISTS idx_session_entries_created_at ON session_entries (created_at);

INSERT INTO session_entries (state, region, ratio, level) VALUES ('latest', 'standard', 96.03, 0);
