-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    count INTEGER NOT NULL DEFAULT 0,
    owner TEXT NOT NULL,
    region TEXT,
    state TEXT NOT NULL DEFAULT 'new',
    level INTEGER
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_count ON gateway_items (count);

INSERT INTO gateway_items (count, owner, region, state, level) VALUES (19, 'strict', 'primary', 'fallback', 9);
INSERT INTO gateway_items (count, owner, region, state, level) VALUES (72, 'cached', 'eu-west', 'primary', 90);
INSERT INTO gateway_items (count, owner, region, state, level) VALUES (81, 'local', 'primary', 'strict', 16);
