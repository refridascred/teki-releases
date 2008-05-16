-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    score REAL NOT NULL DEFAULT 0,
    token TEXT,
    ratio REAL,
    count INTEGER NOT NULL DEFAULT 0,
    weight REAL
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_score ON teki_logs (score);
