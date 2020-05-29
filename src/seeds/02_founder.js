
const founders = require('../fixtures/founders.json')

exports.seed = (knex) => {
  return knex('founder').del()
    .then(() => {
      return knex('founder').insert(founders)
    })
}
