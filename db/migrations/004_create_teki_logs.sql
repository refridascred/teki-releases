-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    rank INTEGER,
    label TEXT,
    active INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_label ON teki_logs (label);

INSERT INTO teki_logs (rank, label, active) VALUES (60, 'staging', 49);
INSERT INTO teki_logs (rank, label, active) VALUES (53, 'edge', 78);
