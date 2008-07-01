-- Create the teki_logs table.
CREATE TABLE IF NOT EXISTS teki_logs (
    id INTEGER PRIMARY KEY,
    rank INTEGER,
    region TEXT,
    weight REAL
);

CREATE INDEX IF NOT EXISTS idx_teki_logs_region ON teki_logs (region);
