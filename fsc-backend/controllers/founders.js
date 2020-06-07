const bc = require('./base_controller');

const getAllFounders = async () => {
  const response = await bc.getAll('founders');
  return response;
}

const getOneFounder = async id => {
  const response = await bc.getOne(id, 'founders');
  return response;
}

const postFounder = async data => {
  const response = await bc.postOne(data, 'founders');
  return response;
}

const patchFounder = async (data, id) => {
  const response = await bc.patchOne(data, id, 'founders');
  return response;
}

const deleteFounder = async id => {
  const response = await bc.deleteOne(id, 'founders');
  return response;
}


module.exports = {
  getAllFounders,
  getOneFounder,
  postFounder,
  patchFounder,
  deleteFounder
}
