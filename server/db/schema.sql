DROP TABLE IF EXISTS founders;
DROP TABLE IF EXISTS companies;

CREATE TABLE companies(
  _id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  city VARCHAR(100),
  state VARCHAR(100),
  founded DATE,
  description text
);

CREATE TABLE founders(
  _id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  title VARCHAR(100),
  company_id INT,
  CONSTRAINT fk_companies
    FOREIGN KEY(company_id)
	    REFERENCES companies(_id)
);

