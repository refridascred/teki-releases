-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    created_at TIMESTAMP,
    region TEXT,
    state TEXT NOT NULL DEFAULT 'new',
    rank INTEGER,
    label TEXT
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_state ON gateway_items (state);

INSERT INTO gateway_items (region, state, rank, label) VALUES ('cached', 'standard', 2, 'edge');
