-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    created_at TIMESTAMP,
    region TEXT,
    rank INTEGER
);

CREATE INDEX IF NOT EXISTS idx_digest_items_created_at ON digest_items (created_at);

INSERT INTO digest_items (region, rank) VALUES ('fallback', 40);
INSERT INTO digest_items (region, rank) VALUES ('green', 50);
INSERT INTO digest_items (region, rank) VALUES ('legacy', 53);
