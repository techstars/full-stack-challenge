
const founders = require('../fixtures/founders.json')

exports.seed = (knex) => {
  return knex.raw('ALTER SEQUENCE company_id_seq RESTART WITH 13')
    .then(() => knex('founder').del())
    .then(() => knex('founder').insert(founders))
}
