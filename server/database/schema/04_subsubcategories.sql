DROP TABLE IF EXISTS subsubcategories CASCADE;

CREATE TABLE subsubcategories (
  id SERIAL PRIMARY KEY,
  name varchar NOT NULL,
  subcategory_id INTEGER REFERENCES subcategories(id) ON DELETE CASCADE
);