-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    weight REAL,
    rank INTEGER,
    level INTEGER,
    count INTEGER NOT NULL DEFAULT 0,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_level ON teki_logs (level);

INSERT INTO teki_logs (weight, rank, level, count, region) VALUES (76.17, 14, 23, 18, 'primary');
INSERT INTO teki_logs (weight, rank, level, count, region) VALUES (20.61, 30, 9, 6, 'cached');
