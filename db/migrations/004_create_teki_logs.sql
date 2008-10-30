-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    level INTEGER,
    rank INTEGER,
    ratio REAL,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_region ON teki_logs (region);

INSERT INTO teki_logs (level, rank, ratio, region) VALUES (24, 73, 41.86, 'cached');
INSERT INTO teki_logs (level, rank, ratio, region) VALUES (6, 16, 1.5, 'green');
INSERT INTO teki_logs (level, rank, ratio, region) VALUES (50, 79, 96.45, 'staging');
