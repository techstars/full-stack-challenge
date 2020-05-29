

const knex = require('./connection')

module.exports = {
  getCompanies() {
    return knex.select('*').from('company')
  }
}