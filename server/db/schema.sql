CREATE TABLE companies(
  _id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  city VARCHAR(100),
  state VARCHAR(2),
  founded DATE,
  description text
);

CREATE TABLE founders(
  _id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  title VARCHAR(100),
  company_id integer references companies(_id)
);

