-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    level INTEGER,
    token TEXT,
    score REAL NOT NULL DEFAULT 0,
    ratio REAL,
    label TEXT
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_score ON teki_logs (score);
