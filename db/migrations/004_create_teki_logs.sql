-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    created_at TIMESTAMP,
    ratio REAL,
    active INTEGER NOT NULL DEFAULT 1,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_created_at ON teki_logs (created_at);

INSERT INTO teki_logs (ratio, active, region) VALUES (20.25, 84, 'local');
INSERT INTO teki_logs (ratio, active, region) VALUES (77.45, 88, 'eu-west');
