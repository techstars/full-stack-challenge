
const companies = require('../fixtures/companies.json')

exports.seed = (knex) => {
  return knex('company').del()
    .then(() => {
      return knex('company').insert(companies)
    })
}
