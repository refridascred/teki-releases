-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    owner TEXT NOT NULL,
    level INTEGER,
    region TEXT
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_region ON teki_logs (region);

INSERT INTO teki_logs (owner, level, region) VALUES ('local', 10, 'local');
INSERT INTO teki_logs (owner, level, region) VALUES ('eu-west', 61, 'eu-west');
INSERT INTO teki_logs (owner, level, region) VALUES ('fallback', 58, 'local');
