-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    rank INTEGER,
    created_at TIMESTAMP,
    weight REAL,
    ratio REAL
);

CREATE INDEX IF NOT EXISTS idx_session_entries_ratio ON session_entries (ratio);

INSERT INTO session_entries (rank, weight, ratio) VALUES (90, 16.74, 82.67);
INSERT INTO session_entries (rank, weight, ratio) VALUES (90, 39.89, 42.62);
INSERT INTO session_entries (rank, weight, ratio) VALUES (73, 8.13, 42.69);
