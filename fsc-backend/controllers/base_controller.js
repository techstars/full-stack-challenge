const knex = require('../knex');
const formatter = require('../util/formatter');

// These are reusable boilerplate database calls

const getAll = async (resourceType) => {
  try {
    const result = await knex(resourceType);
    return result;
  } catch (error) {
    return { error }
  }
}

const getOne = async (id, resourceType) => {
  try {
    const result = await knex(resourceType).where('id', id);
    return result;
  } catch (error) {
    return { error }
  }
}

const postOne = async (data, resourceType) => {
  try {
    const newObject = formatter.formatPostData(data, resourceType);
    console.log(newObject)
    const result = await knex(resourceType)
      .returning('*')
      .insert(newObject);
    return result;
  } catch (error) {
    return { error }
  }
}

const patchOne = async (data, id, resourceType) => {
  try {
    const existingObject = await knex(resourceType).where('id', id)
    const newObject = formatter.formatPatchData(existingObject, data, resourceType);
    const result = await knex(resourceType)
      .where('id', id)
      .returning('*')
      .update(newObject);
    return result;
  } catch (error) {
    return { error }
  }
}

const deleteOne = async (id, resourceType) => {
  try {
    const result = await knex(resourceType)
      .where('id', id)
      .returning('*')
      .del();
    return result;
  } catch (error) {
    return { error }
  }
}

module.exports = {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne
}
