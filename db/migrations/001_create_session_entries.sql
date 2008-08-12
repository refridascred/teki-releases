-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    label TEXT,
    region TEXT,
    state TEXT NOT NULL DEFAULT 'new',
    created_at TIMESTAMP,
    active INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX IF NOT EXISTS idx_session_entries_state ON session_entries (state);

INSERT INTO session_entries (label, region, state, active) VALUES ('primary', 'staging', 'latest', 25);
INSERT INTO session_entries (label, region, state, active) VALUES ('edge', 'latest', 'eu-west', 35);
INSERT INTO session_entries (label, region, state, active) VALUES ('latest', 'primary', 'standard', 68);
