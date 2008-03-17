-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    label TEXT,
    ratio REAL,
    state TEXT NOT NULL DEFAULT 'new',
    count INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_count ON gateway_items (count);

INSERT INTO gateway_items (label, ratio, state, count) VALUES ('staging', 1.26, 'cached', 92);
INSERT INTO gateway_items (label, ratio, state, count) VALUES ('strict', 29.95, 'staging', 24);
INSERT INTO gateway_items (label, ratio, state, count) VALUES ('local', 83.11, 'cached', 7);
