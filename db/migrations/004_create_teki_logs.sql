-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    owner TEXT NOT NULL,
    region TEXT,
    score REAL NOT NULL DEFAULT 0,
    ratio REAL
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_region ON teki_logs (region);

INSERT INTO teki_logs (owner, region, score, ratio) VALUES ('staging', 'local', 48.83, 6.43);
INSERT INTO teki_logs (owner, region, score, ratio) VALUES ('latest', 'cached', 48.69, 22.8);
INSERT INTO teki_logs (owner, region, score, ratio) VALUES ('strict', 'latest', 10.31, 62.5);
