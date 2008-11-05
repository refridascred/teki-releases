-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    ratio REAL,
    owner TEXT NOT NULL,
    token TEXT
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_owner ON teki_logs (owner);

INSERT INTO teki_logs (ratio, owner, token) VALUES (74.75, 'edge', 'eu-west');
