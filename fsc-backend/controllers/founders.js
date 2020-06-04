const knex = require('../knex');

const getAllFounders = async () => {
  const result = await knex('founders');
  return result;
}

const getOneFounder = async id => {
  const result = await knex('founders').where('id', id);
  return result;
}

module.exports = {
  getAllFounders,
  getOneFounder
}
