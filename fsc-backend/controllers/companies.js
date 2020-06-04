const knex = require('../knex');

const getAllCompanies = async () => {
  try {
    const result = await knex('companies');
    return result;
  } catch (error) {
    return { error }
  }
}

const getOneCompany = async id => {
  try {
    const company = await knex('companies').where('id', id);
    const founders = await knex('founders').where('companyId', id);
    const companyWithFounders = {
      ...company[0],
      founders
    }
    return companyWithFounders;
  } catch (error) {
    return { error }
  }
}

module.exports = {
  getAllCompanies,
  getOneCompany
}
