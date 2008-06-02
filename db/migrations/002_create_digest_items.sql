-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    label TEXT,
    ratio REAL,
    owner TEXT NOT NULL,
    state TEXT NOT NULL DEFAULT 'new',
    level INTEGER
);

CREATE INDEX IF NOT EXISTS idx_digest_items_ratio ON digest_items (ratio);

INSERT INTO digest_items (label, ratio, owner, state, level) VALUES ('fallback', 91.38, 'strict', 'local', 36);
