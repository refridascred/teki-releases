-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    created_at TIMESTAMP,
    token TEXT,
    owner TEXT NOT NULL,
    count INTEGER NOT NULL DEFAULT 0,
    weight REAL
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_count ON teki_logs (count);

INSERT INTO teki_logs (token, owner, count, weight) VALUES ('fallback', 'blue', 53, 68.51);
INSERT INTO teki_logs (token, owner, count, weight) VALUES ('green', 'stable', 55, 63.82);
INSERT INTO teki_logs (token, owner, count, weight) VALUES ('strict', 'edge', 68, 86.03);
