-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    weight REAL,
    count INTEGER NOT NULL DEFAULT 0,
    rank INTEGER
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_count ON gateway_items (count);

INSERT INTO gateway_items (weight, count, rank) VALUES (38.45, 64, 49);
INSERT INTO gateway_items (weight, count, rank) VALUES (61.93, 46, 10);
INSERT INTO gateway_items (weight, count, rank) VALUES (53.26, 26, 40);
