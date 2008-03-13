-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    region TEXT,
    score REAL NOT NULL DEFAULT 0,
    token TEXT,
    level INTEGER,
    label TEXT
);

CREATE INDEX IF NOT EXISTS idx_digest_items_level ON digest_items (level);

INSERT INTO digest_items (region, score, token, level, label) VALUES ('legacy', 76.3, 'local', 16, 'local');
INSERT INTO digest_items (region, score, token, level, label) VALUES ('primary', 38.83, 'strict', 31, 'blue');
