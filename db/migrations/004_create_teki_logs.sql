-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    token TEXT,
    region TEXT,
    label TEXT,
    state TEXT NOT NULL DEFAULT 'new'
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_label ON teki_logs (label);

INSERT INTO teki_logs (token, region, label, state) VALUES ('fallback', 'cached', 'latest', 'latest');
INSERT INTO teki_logs (token, region, label, state) VALUES ('cached', 'open', 'green', 'green');
