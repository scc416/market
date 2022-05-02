DROP TABLE IF EXISTS subcategories CASCADE;

CREATE TABLE subcategories (
  id SERIAL PRIMARY KEY,
  name varchar NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);