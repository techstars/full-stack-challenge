const knex = require('../knex');

const getAllCompanies = async () => {
  const result = await knex('companies');
  return result;
}

const getOneCompany = async id => {
  const result = await knex('companies').where('id', id);
  return result;
}

module.exports = {
  getAllCompanies,
  getOneCompany
}
