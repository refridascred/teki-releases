-- Create the session_entries table.
CREATE TABLE IF NOT EXISTS session_entries (
    id INTEGER PRIMARY KEY,
    owner TEXT NOT NULL,
    rank INTEGER,
    count INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_session_entries_count ON session_entries (count);

INSERT INTO session_entries (owner, rank, count) VALUES ('latest', 7, 40);
INSERT INTO session_entries (owner, rank, count) VALUES ('local', 47, 26);
INSERT INTO session_entries (owner, rank, count) VALUES ('local', 21, 93);
