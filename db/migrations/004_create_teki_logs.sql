-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    ratio REAL,
    created_at TIMESTAMP,
    region TEXT,
    rank INTEGER
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_rank ON teki_logs (rank);

INSERT INTO teki_logs (ratio, region, rank) VALUES (59.75, 'blue', 12);
