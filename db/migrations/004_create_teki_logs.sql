-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    state TEXT NOT NULL DEFAULT 'new',
    ratio REAL,
    score REAL NOT NULL DEFAULT 0,
    weight REAL,
    rank INTEGER
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_ratio ON teki_logs (ratio);

INSERT INTO teki_logs (state, ratio, score, weight, rank) VALUES ('local', 93.86, 92.84, 44.0, 27);
INSERT INTO teki_logs (state, ratio, score, weight, rank) VALUES ('blue', 91.81, 94.91, 69.95, 6);
INSERT INTO teki_logs (state, ratio, score, weight, rank) VALUES ('edge', 16.76, 30.77, 36.82, 67);
