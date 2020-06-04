const knex = require('../knex');

// Reusable error creator
const sendError = (res, statusCode = 500, message = 'Something went wrong.') => {
  res.status(statusCode).send({ error: { message } });
}

// Check if entry exists in the given table.
const checkIfExists = (tableName) => {
  return async (req, res, next) => {
    const result = await knex(tableName).where('id', req.params.id);
    if (result.length === 0) {
      sendError(res, 404, 'Entry not found.');
    } else {
      next();
    }
  }
}

module.exports = {
  sendError,
  checkIfExists
}
