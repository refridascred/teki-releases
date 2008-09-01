-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    weight REAL,
    score REAL NOT NULL DEFAULT 0,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_region ON teki_logs (region);

INSERT INTO teki_logs (weight, score, region) VALUES (41.51, 80.43, 'eu-west');
INSERT INTO teki_logs (weight, score, region) VALUES (20.24, 77.58, 'fallback');
INSERT INTO teki_logs (weight, score, region) VALUES (9.97, 21.15, 'staging');
