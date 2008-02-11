-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    label TEXT,
    owner TEXT NOT NULL,
    weight REAL,
    level INTEGER,
    created_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_owner ON teki_logs (owner);

INSERT INTO teki_logs (label, owner, weight, level) VALUES ('latest', 'edge', 9.74, 58);
INSERT INTO teki_logs (label, owner, weight, level) VALUES ('stable', 'local', 51.72, 87);
