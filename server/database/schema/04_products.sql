DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  title varchar,
  category_id  INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  description varchar
);