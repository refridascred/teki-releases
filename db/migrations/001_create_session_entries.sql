-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    label TEXT,
    weight REAL,
    rank INTEGER,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_session_entries_weight ON session_entries (weight);

INSERT INTO session_entries (label, weight, rank, owner) VALUES ('green', 40.52, 10, 'green');
