-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    created_at TIMESTAMP,
    token TEXT,
    region TEXT,
    weight REAL
);

CREATE INDEX IF NOT EXISTS idx_session_entries_created_at ON session_entries (created_at);

INSERT INTO session_entries (token, region, weight) VALUES ('primary', 'standard', 8.54);
INSERT INTO session_entries (token, region, weight) VALUES ('latest', 'blue', 83.35);
