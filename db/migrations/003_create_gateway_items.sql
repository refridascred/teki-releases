-- Create the gateway_items table.
CREATE TABLE IF NOT EXISTS gateway_items (
    id INTEGER PRIMARY KEY,
    token TEXT,
    owner TEXT NOT NULL,
    label TEXT,
    ratio REAL
);

CREATE INDEX IF NOT EXISTS idx_gateway_items_label ON gateway_items (label);

INSERT INTO gateway_items (token, owner, label, ratio) VALUES ('strict', 'staging', 'local', 38.72);
INSERT INTO gateway_items (token, owner, label, ratio) VALUES ('primary', 'stable', 'cached', 32.54);
