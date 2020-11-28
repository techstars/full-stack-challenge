const models = require('../models/companies.js');
const founders = require('../models/founders.js');

const getAllCompanies = () => {
  return models.getAllCompanies()
               .then(async (companies) => {

                 companies = companies.rows;
                 // get founders list for each company and attach to return obj
                 for(let i = 0; i < companies.length; i++) {
                   let company = companies[i]
                   let foundersList = await founders.getCompanyFounders([company._id]);
                   company.founders = foundersList.rows;
                 }

                 return companies;
               })
               .catch((err) => {
                 throw err;
               })
}

const getOneCompany = (id) => {
  return models.getOneCompany([id])
               .then(async (company) => {
                 company = company.rows[0];
                 const foundersList = await founders.getCompanyFounders([company._id])
                 company.founders = foundersList.rows;
                 return company;
               })
               .catch((err) => {
                 throw err;
               })
}

const addCompany = (company) => {
  const insertData = [company.name, company.city, company.state, company.founded, company.description]
  return models.addCompany(insertData)
               .then((data) => {
                 return data;
               })
               .catch((err) => {
                 throw err;
               })
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
  getOneCompany,
  addCompany,
  updateCompany,
  deleteCompany,
}