DROP TABLE IF EXISTS categories CASCADE;

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name varchar NOT NULL
);