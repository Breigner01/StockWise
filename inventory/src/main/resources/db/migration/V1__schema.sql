DROP TABLE IF EXISTS items;

CREATE TABLE items (
       owner_id VARCHAR(255) NOT NULL,
       sku INT NOT NULL,
       quantity INT DEFAULT 0,
       available INT DEFAULT 0,
       in_transit INT DEFAULT 0,
       PRIMARY KEY (owner_id, sku)
)
