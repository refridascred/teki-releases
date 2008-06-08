-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    token TEXT,
    count INTEGER NOT NULL DEFAULT 0,
    owner TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_owner ON teki_logs (owner);

INSERT INTO teki_logs (token, count, owner) VALUES ('blue', 1, 'stable');
INSERT INTO teki_logs (token, count, owner) VALUES ('cached', 86, 'standard');
