-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    rank INTEGER,
    created_at TIMESTAMP,
    region TEXT,
    state TEXT NOT NULL DEFAULT 'new',
    weight REAL
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_created_at ON gateway_items (created_at);

INSERT INTO gateway_items (rank, region, state, weight) VALUES (43, 'legacy', 'staging', 68.33);
INSERT INTO gateway_items (rank, region, state, weight) VALUES (94, 'standard', 'strict', 70.87);
INSERT INTO gateway_items (rank, region, state, weight) VALUES (46, 'primary', 'stable', 45.44);
