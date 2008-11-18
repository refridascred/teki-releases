-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    count INTEGER NOT NULL DEFAULT 0,
    level INTEGER,
    created_at TIMESTAMP,
    label TEXT,
    ratio REAL
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_created_at ON teki_logs (created_at);

INSERT INTO teki_logs (count, level, label, ratio) VALUES (37, 49, 'eu-west', 23.68);
INSERT INTO teki_logs (count, level, label, ratio) VALUES (83, 66, 'fallback', 3.01);
INSERT INTO teki_logs (count, level, label, ratio) VALUES (53, 2, 'staging', 0.93);
