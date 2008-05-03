-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    count INTEGER NOT NULL DEFAULT 0,
    owner TEXT NOT NULL,
    weight REAL,
    score REAL NOT NULL DEFAULT 0,
    ratio REAL
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_count ON teki_logs (count);

INSERT INTO teki_logs (count, owner, weight, score, ratio) VALUES (43, 'staging', 89.38, 15.28, 74.24);
