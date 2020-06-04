const knex = require('../knex');

const getAllFounders = async () => {
  try {
    const result = await knex('founders');
    return result;
  } catch (error) {
    return { error }
  }
}

const getOneFounder = async id => {
  try {
    const result = await knex('founders').where('id', id);
    return result;
  } catch (error) {
    return { error }
  }
}

module.exports = {
  getAllFounders,
  getOneFounder
}
