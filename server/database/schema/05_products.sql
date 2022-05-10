DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  title varchar,
  subsubcategory_id  INTEGER REFERENCES subsubcategories(id) ON DELETE CASCADE,
  description varchar
);