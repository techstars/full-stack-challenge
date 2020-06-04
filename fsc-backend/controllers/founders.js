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

const patchFounder = async (data, id) => {
  try {
    const founder = await knex('founders').where('id', id)
    const newObject = formatter.formatFounderPatchData(founder, data);
    const result = await knex('founders')
      .where('id', id)
      .returning('*')
      .update(newObject);
    return result;
  } catch (error) {
    return { error }
  }
}

const deleteFounder = async id => {
  try {
    const result = await knex('founders')
      .where('id', id)
      .returning('*')
      .del();
    return result;
  } catch (error) {
    return { error }
  }
}


module.exports = {
  getAllFounders,
  getOneFounder,
  postFounder,
  patchFounder,
  deleteFounder
}
