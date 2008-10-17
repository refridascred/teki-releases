-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    ratio REAL,
    token TEXT,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_ratio ON teki_logs (ratio);

INSERT INTO teki_logs (ratio, token, region) VALUES (74.89, 'latest', 'green');
INSERT INTO teki_logs (ratio, token, region) VALUES (10.16, 'strict', 'primary');
INSERT INTO teki_logs (ratio, token, region) VALUES (7.44, 'cached', 'cached');
