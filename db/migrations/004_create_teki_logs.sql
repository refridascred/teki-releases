-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    region TEXT,
    ratio REAL,
    owner TEXT NOT NULL,
    rank INTEGER,
    score REAL NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_score ON teki_logs (score);

INSERT INTO teki_logs (region, ratio, owner, rank, score) VALUES ('stable', 81.83, 'cached', 8, 41.07);
INSERT INTO teki_logs (region, ratio, owner, rank, score) VALUES ('eu-west', 98.58, 'cached', 50, 34.22);
INSERT INTO teki_logs (region, ratio, owner, rank, score) VALUES ('stable', 22.24, 'open', 18, 47.79);
