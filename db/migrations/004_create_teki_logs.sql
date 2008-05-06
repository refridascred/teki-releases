-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    region TEXT,
    level INTEGER,
    rank INTEGER,
    ratio REAL,
    token TEXT
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_ratio ON teki_logs (ratio);
