-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    created_at TIMESTAMP,
    score REAL NOT NULL DEFAULT 0,
    ratio REAL
);

CREATE INDEX IF NOT EXISTS idx_digest_items_ratio ON digest_items (ratio);

INSERT INTO digest_items (score, ratio) VALUES (83.53, 18.4);
INSERT INTO digest_items (score, ratio) VALUES (13.91, 19.12);
INSERT INTO digest_items (score, ratio) VALUES (11.82, 12.83);
