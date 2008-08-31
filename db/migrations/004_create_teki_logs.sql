-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    ratio REAL,
    count INTEGER NOT NULL DEFAULT 0,
    score REAL NOT NULL DEFAULT 0,
    region TEXT,
    state TEXT NOT NULL DEFAULT 'new'
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_state ON teki_logs (state);

INSERT INTO teki_logs (ratio, count, score, region, state) VALUES (93.88, 9, 84.17, 'fallback', 'edge');
