-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    level INTEGER,
    created_at TIMESTAMP,
    count INTEGER NOT NULL DEFAULT 0,
    active INTEGER NOT NULL DEFAULT 1,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_count ON teki_logs (count);

INSERT INTO teki_logs (level, count, active, owner) VALUES (4, 9, 19, 'staging');
INSERT INTO teki_logs (level, count, active, owner) VALUES (10, 60, 91, 'open');
INSERT INTO teki_logs (level, count, active, owner) VALUES (86, 98, 99, 'blue');
