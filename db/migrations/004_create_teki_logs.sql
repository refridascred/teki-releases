-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    count INTEGER NOT NULL DEFAULT 0,
    level INTEGER,
    created_at TIMESTAMP,
    weight REAL,
    rank INTEGER
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_level ON teki_logs (level);
