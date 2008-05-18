-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    token TEXT,
    rank INTEGER,
    label TEXT,
    weight REAL,
    level INTEGER
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_label ON teki_logs (label);

INSERT INTO teki_logs (token, rank, label, weight, level) VALUES ('fallback', 62, 'green', 72.29, 44);
INSERT INTO teki_logs (token, rank, label, weight, level) VALUES ('local', 58, 'edge', 32.03, 18);
INSERT INTO teki_logs (token, rank, label, weight, level) VALUES ('latest', 27, 'blue', 65.32, 83);
