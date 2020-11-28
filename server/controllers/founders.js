const models = require('../models/founders.js')

const getAllFounders = () => {
  return models.getAllFounders();
}

const getCompanyFounders = (id) => {
  return models.getCompanyFounders([id]);
}

const addFounder = (founder, id) => {
  const queryParams = [founder.name, founder.title, id]
  return models.addFounder(queryParams);
}

module.exports = {
  getAllFounders,
  getCompanyFounders,
  addFounder,
}

