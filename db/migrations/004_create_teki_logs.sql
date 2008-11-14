-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    weight REAL,
    created_at TIMESTAMP,
    label TEXT,
    token TEXT
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_weight ON teki_logs (weight);
