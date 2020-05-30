

const knex = require('./connection')

module.exports = {
  deleteCompanyAndFoundersById(id) {
    return knex('company')
      .innerJoin('founder', 'company.id', 'founder.company_id')
      .where('id', id)
      .del()
  },
  insertCompany(req) {
    return knex('company').insert(req, '*')
  },
  insertFounder(req) {
    return knex('founder').insert(req, '*')
  },
  selectCompanies() {
    return knex('company', '*')
  },
  selectCompanyById(id) {
    return knex('company').where('id', id).first()
  },
  selectFoundersByCompanyId(id) {
    return knex('founder').where('company_id', id)
  },
  updateCompany(id, req) {
    return knex('company').where('id', id).update(req, '*')
  }
}