-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    active INTEGER NOT NULL DEFAULT 1,
    level INTEGER,
    weight REAL
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_level ON gateway_items (level);

INSERT INTO gateway_items (active, level, weight) VALUES (27, 14, 94.93);
INSERT INTO gateway_items (active, level, weight) VALUES (77, 52, 85.64);
INSERT INTO gateway_items (active, level, weight) VALUES (66, 26, 72.02);
