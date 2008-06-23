-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    token TEXT,
    active INTEGER NOT NULL DEFAULT 1,
    ratio REAL
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_token ON teki_logs (token);

INSERT INTO teki_logs (token, active, ratio) VALUES ('fallback', 69, 57.66);
INSERT INTO teki_logs (token, active, ratio) VALUES ('edge', 92, 28.4);
