const knex = require('../knex');
const bc = require('./base_controller');

const getAllCompanies = async () => {
  const response = await bc.getAll('companies');
  return response;
}

// Gets the company and all founders associated with it, combines them into one object, and returns it
const getOneCompany = async id => {
  const company = await bc.getOne(id, 'companies');
  const founders = await knex('founders').where('companyId', id);
  const companyWithFounders = {
    ...company[0],
    founders
  }
  return companyWithFounders;
}

const postCompany = async data => {
  const response = await bc.postOne(data, 'companies');
  return response;
}

const patchCompany = async (data, id) => {
  const response = await bc.patchOne(data, id, 'companies');
  return response;
}

const deleteCompany = async id => {
  const response = await bc.deleteOne(id, 'companies');
  return response;
}

module.exports = {
  getAllCompanies,
  getOneCompany,
  postCompany,
  patchCompany,
  deleteCompany
}
