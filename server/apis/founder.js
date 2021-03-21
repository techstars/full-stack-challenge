const model = require('../models/index').Founders;

const createFounder = async (founderObj) => {
  return await model.create(founderObj);
};

const getFoundersByCompanyId = async (companyId) => {
  return await model.findAll({
    where: {
      company: [companyId]
    }
  });
};

export {
  createFounder,
  getFoundersByCompanyId
};