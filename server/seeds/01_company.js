
const companies = require('../fixtures/companies.json')

exports.seed = (knex) => {
  return knex.raw('ALTER SEQUENCE company_id_seq RESTART WITH 1')
    .then(() => knex('company').del())
    .then(() => knex('company').insert(companies))
}
