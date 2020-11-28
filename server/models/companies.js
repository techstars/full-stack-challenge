const { Client } = require('pg');

const getCompanies = () => {

  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DB,
    password: process.env.DB_PWD,
    port: process.env.DB_PORT,
  })

  client.connect();

  return client.query('SELECT * FROM companies')
               .then((data) => {
                 client.end();
                 return data;
               })
               .catch((err) => {
                 throw err;
               })
}

const addCompany = (params) => {

  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DB,
    password: process.env.DB_PWD,
    port: process.env.DB_PORT,
  })

  client.connect();

  return client.query('INSERT INTO companies(name, city, state, founded, description) VALUES($1, $2, $3, $4, $5)', params)
               .then((data) => {
                 client.end();
                 return data;
               })
               .catch((err) => {
                 throw err;
               })
}

const updateCompany = (params) => {

  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DB,
    password: process.env.DB_PWD,
    port: process.env.DB_PORT,
  })

  client.connect();

  return client.query('UPDATE companies SET name = $1, city = $2, state = $3, founded = $4, description = $5 WHERE _id = $6', params)
               .then((data) => {
                 client.end();
                 return data;
               })
               .catch((err) => {
                 throw err;
               })
}

const deleteCompany = (params) => {

  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DB,
    password: process.env.DB_PWD,
    port: process.env.DB_PORT,
  })

  client.connect();

  return client.query('DELETE FROM companies WHERE _id = $1', params)
               .then((data) => {
                 client.end();
                 return data;
               })
               .catch((err) => {
                 throw err;
               })
}

module.exports = {
  updateCompany,
  getCompanies,
  addCompany,
  deleteCompany,
}