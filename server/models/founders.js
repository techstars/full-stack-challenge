const { Client } = require('pg');

const getAllFounders = () => {

  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DB,
    password: process.env.DB_PWD,
    port: process.env.DB_PORT,
  })

  client.connect();

  return client.query('SELECT * FROM founders ORDER BY company_id')
               .then((data) => {
                 client.end();
                 return data;
               })
               .catch((err) => {
                 throw err;
               })
}

const getCompanyFounders = (params) => {

  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DB,
    password: process.env.DB_PWD,
    port: process.env.DB_PORT,
  })

  client.connect();

  return client.query('SELECT name, title FROM founders WHERE company_id = $1', params)
               .then((data) => {
                 client.end();
                 return data;
               })
               .catch((err) => {
                 throw err;
               })
}

const addFounder = (params) => {

  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DB,
    password: process.env.DB_PWD,
    port: process.env.DB_PORT,
  })

  client.connect();

  return client.query('INSERT INTO founders(name, title, company_id) VALUES($1, $2, $3)', params)
               .then((data) => {
                 client.end();
                 return data;
               })
               .catch((err) => {
                 throw err;
               })
}

module.exports = {
  getAllFounders,
  getCompanyFounders,
  addFounder,
}