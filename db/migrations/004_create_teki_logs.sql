-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    token TEXT,
    rank INTEGER,
    level INTEGER,
    ratio REAL
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_token ON teki_logs (token);
