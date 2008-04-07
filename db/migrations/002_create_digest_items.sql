-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    created_at TIMESTAMP,
    owner TEXT NOT NULL,
    active INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX IF NOT EXISTS idx_digest_items_active ON digest_items (active);

INSERT INTO digest_items (owner, active) VALUES ('primary', 13);
INSERT INTO digest_items (owner, active) VALUES ('open', 73);
INSERT INTO digest_items (owner, active) VALUES ('green', 47);
