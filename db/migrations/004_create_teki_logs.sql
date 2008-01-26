-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    count INTEGER NOT NULL DEFAULT 0,
    owner TEXT NOT NULL,
    rank INTEGER
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_owner ON teki_logs (owner);

INSERT INTO teki_logs (count, owner, rank) VALUES (22, 'blue', 75);
