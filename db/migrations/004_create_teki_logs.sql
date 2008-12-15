-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    rank INTEGER,
    weight REAL,
    region TEXT,
    created_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_region ON teki_logs (region);

INSERT INTO teki_logs (rank, weight, region) VALUES (55, 73.12, 'staging');
INSERT INTO teki_logs (rank, weight, region) VALUES (71, 52.93, 'strict');
INSERT INTO teki_logs (rank, weight, region) VALUES (39, 17.03, 'edge');
