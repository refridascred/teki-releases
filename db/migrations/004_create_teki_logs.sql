-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    token TEXT,
    rank INTEGER,
    active INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_active ON teki_logs (active);

INSERT INTO teki_logs (token, rank, active) VALUES ('blue', 8, 11);
