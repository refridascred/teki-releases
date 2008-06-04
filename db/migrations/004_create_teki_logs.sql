-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    token TEXT,
    state TEXT NOT NULL DEFAULT 'new',
    level INTEGER
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_state ON teki_logs (state);

INSERT INTO teki_logs (token, state, level) VALUES ('edge', 'strict', 93);
INSERT INTO teki_logs (token, state, level) VALUES ('green', 'legacy', 69);
INSERT INTO teki_logs (token, state, level) VALUES ('blue', 'local', 7);
