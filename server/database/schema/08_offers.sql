DROP TABLE IF EXISTS offers CASCADE;  

CREATE TABLE offers (
  id SERIAL PRIMARY KEY,
  time TIMESTAMP NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  has_responsed BOOLEAN NOT NULL DEFAULT FALSE,
  accepted BOOLEAN
);