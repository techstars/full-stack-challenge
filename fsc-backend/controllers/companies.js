const knex = require('../knex');
const formatter = require('../util/company');

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

const postCompany = async data => {
  try {
    const newObject = formatter.formatCompanyPostData(data);
    const result = await knex('companies')
      .returning('*')
      .insert(newObject);
    return result;
  } catch (error) {
    return { error }
  }
}

const patchCompany = async (data, id) => {
  try {
    const company = await knex('companies').where('id', id)
    const newObject = formatter.formatCompanyPatchData(company, data);
    const result = await knex('companies')
      .where('id', id)
      .returning('*')
      .update(newObject);
    return result;
  } catch (error) {
    return { error }
  }
}

const deleteCompany = async id => {
  try {
    const result = await knex('companies')
      .where('id', id)
      .returning('*')
      .del();
    return result;
  } catch (error) {
    return { error }
  }
}

module.exports = {
  getAllCompanies,
  getOneCompany,
  postCompany,
  patchCompany,
  deleteCompany
}
