-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    token TEXT,
    region TEXT,
    state TEXT NOT NULL DEFAULT 'new',
    label TEXT,
    rank INTEGER
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_region ON gateway_items (region);

INSERT INTO gateway_items (token, region, state, label, rank) VALUES ('edge', 'local', 'cached', 'cached', 77);
