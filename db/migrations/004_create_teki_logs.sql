-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    score REAL NOT NULL DEFAULT 0,
    created_at TIMESTAMP,
    rank INTEGER
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_created_at ON teki_logs (created_at);

INSERT INTO teki_logs (score, rank) VALUES (44.7, 15);
INSERT INTO teki_logs (score, rank) VALUES (77.4, 72);
