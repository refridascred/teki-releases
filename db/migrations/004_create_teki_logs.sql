-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    rank INTEGER,
    state TEXT NOT NULL DEFAULT 'new',
    token TEXT
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_state ON teki_logs (state);

INSERT INTO teki_logs (rank, state, token) VALUES (18, 'local', 'eu-west');
INSERT INTO teki_logs (rank, state, token) VALUES (55, 'cached', 'stable');
