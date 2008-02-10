-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    label TEXT,
    count INTEGER NOT NULL DEFAULT 0,
    active INTEGER NOT NULL DEFAULT 1,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_count ON teki_logs (count);

INSERT INTO teki_logs (label, count, active, owner) VALUES ('local', 32, 23, 'green');
INSERT INTO teki_logs (label, count, active, owner) VALUES ('legacy', 68, 29, 'strict');
