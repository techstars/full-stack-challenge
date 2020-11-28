const models = require('../models/companies.js');

const getAllCompanies = () => {
  return models.getAllCompanies();
}

const addCompany = (company) => {
  const insertData = [company.name, company.city, company.state, company.founded, company.description]
  return models.addCompany(insertData);
}

const updateCompany = (company, id) => {
  const editData = [company.name, company.city, company.state, company.founded, company.description, id]
  return models.updateCompany(editData);
}

const deleteCompany = (id) => {
  return models.deleteCompany([id]);
}

module.exports = {
  getAllCompanies,
  addCompany,
  updateCompany,
  deleteCompany,
}