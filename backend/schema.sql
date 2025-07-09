DROP TABLE IF EXISTS items;

CREATE TABLE items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    price REAL NOT NULL
);

-- Optional: Insert initial data
INSERT INTO items (name, description, price) VALUES
    ('Plumbing Services', 'This is service A', 1.99),
    ('Graphic Design', 'This is service B', 2.99);