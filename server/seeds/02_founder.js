
const founders = require('../fixtures/founders.json')

exports.seed = (knex) => {
  return knex.raw('ALTER SEQUENCE founder_id_seq RESTART WITH 1')
    .then(() => knex('founder').del())
    .then(() => knex('founder').insert(founders))
}
