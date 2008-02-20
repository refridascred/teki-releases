-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    level INTEGER,
    token TEXT,
    owner TEXT NOT NULL,
    count INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_count ON teki_logs (count);

INSERT INTO teki_logs (level, token, owner, count) VALUES (78, 'legacy', 'strict', 45);
INSERT INTO teki_logs (level, token, owner, count) VALUES (96, 'blue', 'strict', 15);
