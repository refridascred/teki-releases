-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    ratio REAL,
    region TEXT,
    created_at TIMESTAMP,
    active INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_created_at ON teki_logs (created_at);

INSERT INTO teki_logs (ratio, region, active) VALUES (29.83, 'local', 7);
