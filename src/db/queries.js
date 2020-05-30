

const knex = require('./connection')

module.exports = {
  deleteCompanyAndFoundersById(id) {
    return knex('company')
      .innerJoin('founder', 'company.id', 'founder.company_id')
      .where('id', id)
      .del()
  },
  selectCompanies() {
    return knex('company', '*')
  },
  selectCompanyAndFoundersById(id) {
    return knex('company')
      .leftJoin('founder', 'company.id', 'founder.company_id')
      .where('company.id', id)
      .select([
        'company.id',
        'company.name',
        'company.description',
        'company.city',
        'company.state',
        'company.date_founded',
        knex.raw(
          'ARRAY_TO_JSON (ARRAY_AGG (founder)) founders'
        )
      ])
      .groupBy('company.id', 'company.name')
      .first()
  },
  insertCompany(req) {
    return knex('company').insert(req, '*')
  },
  insertFounder(req) {
    return knex('founder').insert(req, '*')
  },
  updateCompany(id, req) {
    return knex('company').where('id', id).update(req, '*')
  }
}