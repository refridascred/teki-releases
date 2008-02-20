-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    label TEXT,
    count INTEGER NOT NULL DEFAULT 0,
    level INTEGER
);

CREATE INDEX IF NOT EXISTS idx_digest_items_level ON digest_items (level);

INSERT INTO digest_items (label, count, level) VALUES ('staging', 83, 12);
INSERT INTO digest_items (label, count, level) VALUES ('open', 93, 80);
INSERT INTO digest_items (label, count, level) VALUES ('cached', 50, 90);
