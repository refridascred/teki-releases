-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    score REAL NOT NULL DEFAULT 0,
    token TEXT,
    ratio REAL,
    label TEXT
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_score ON teki_logs (score);

INSERT INTO teki_logs (score, token, ratio, label) VALUES (42.43, 'stable', 3.53, 'primary');
