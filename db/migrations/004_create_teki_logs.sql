-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    weight REAL,
    created_at TIMESTAMP,
    count INTEGER NOT NULL DEFAULT 0,
    active INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_weight ON teki_logs (weight);

INSERT INTO teki_logs (weight, count, active) VALUES (77.66, 66, 8);
INSERT INTO teki_logs (weight, count, active) VALUES (52.75, 57, 96);
INSERT INTO teki_logs (weight, count, active) VALUES (80.05, 0, 57);
