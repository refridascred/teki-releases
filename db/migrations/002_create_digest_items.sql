-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    level INTEGER,
    count INTEGER NOT NULL DEFAULT 0,
    token TEXT,
    score REAL NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_digest_items_level ON digest_items (level);

INSERT INTO digest_items (level, count, token, score) VALUES (25, 60, 'strict', 88.11);
INSERT INTO digest_items (level, count, token, score) VALUES (73, 75, 'stable', 78.84);
INSERT INTO digest_items (level, count, token, score) VALUES (81, 96, 'stable', 30.12);
