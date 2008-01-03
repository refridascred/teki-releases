-- Create the digest_items table.
CREATE TABLE IF NOT EXISTS digest_items (
    id INTEGER PRIMARY KEY,
    region TEXT,
    token TEXT,
    rank INTEGER
);

CREATE INDEX IF NOT EXISTS idx_digest_items_region ON digest_items (region);

INSERT INTO digest_items (region, token, rank) VALUES ('legacy', 'standard', 69);
INSERT INTO digest_items (region, token, rank) VALUES ('local', 'edge', 98);
INSERT INTO digest_items (region, token, rank) VALUES ('blue', 'primary', 14);
