const model = require('../models/index').Companies;

const createCompany = async (companyObj) => {
  return await model.create(companyObj);
};

const getCompanyById = async (id) => {
  return await model.findAll({
    where: {
      id: [id]
    }
  });
}

const getAllCompanies = async () => {
  return await model.findAll();
}

const updateCompanyById = async (id, companyObj) => {
  return await model.update(companyObj, {
    where: {
      id: [id]
    }
  });
}

const deleteCompanyById = async (id) => {
  return await model.destroy(id);
}

export {
  createCompany, 
  getCompanyById, 
  getAllCompanies,
  updateCompanyById,
  deleteCompanyById
};