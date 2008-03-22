-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    region TEXT,
    ratio REAL,
    token TEXT,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_region ON teki_logs (region);

INSERT INTO teki_logs (region, ratio, token, owner) VALUES ('staging', 68.96, 'legacy', 'strict');
INSERT INTO teki_logs (region, ratio, token, owner) VALUES ('blue', 38.51, 'latest', 'staging');
INSERT INTO teki_logs (region, ratio, token, owner) VALUES ('open', 85.04, 'stable', 'blue');
