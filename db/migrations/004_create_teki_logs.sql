-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    ratio REAL,
    score REAL NOT NULL DEFAULT 0,
    state TEXT NOT NULL DEFAULT 'new',
    created_at TIMESTAMP,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_owner ON teki_logs (owner);

INSERT INTO teki_logs (ratio, score, state, owner) VALUES (74.05, 29.63, 'cached', 'standard');
INSERT INTO teki_logs (ratio, score, state, owner) VALUES (60.56, 43.39, 'legacy', 'open');
