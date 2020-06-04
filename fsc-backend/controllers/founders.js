const knex = require('../knex');
const formatter = require('../util/founder');

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

const postFounder = async data => {
  try {
    const newObject = formatter.formatFounderPostData(data);
    const result = await knex('founders')
      .returning('*')
      .insert(newObject);
    return result;
  } catch (error) {
    return { error }
  }
}

module.exports = {
  getAllFounders,
  getOneFounder,
  postFounder
}
