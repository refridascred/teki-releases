-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    owner TEXT NOT NULL,
    ratio REAL,
    weight REAL
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_owner ON teki_logs (owner);

INSERT INTO teki_logs (owner, ratio, weight) VALUES ('fallback', 79.11, 76.94);
INSERT INTO teki_logs (owner, ratio, weight) VALUES ('primary', 98.05, 86.03);
INSERT INTO teki_logs (owner, ratio, weight) VALUES ('legacy', 31.08, 97.56);
