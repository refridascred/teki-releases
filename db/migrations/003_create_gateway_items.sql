-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    state TEXT NOT NULL DEFAULT 'new',
    region TEXT,
    active INTEGER NOT NULL DEFAULT 1,
    rank INTEGER
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_active ON gateway_items (active);

INSERT INTO gateway_items (state, region, active, rank) VALUES ('strict', 'primary', 51, 66);
INSERT INTO gateway_items (state, region, active, rank) VALUES ('standard', 'blue', 3, 40);
INSERT INTO gateway_items (state, region, active, rank) VALUES ('blue', 'cached', 69, 27);
