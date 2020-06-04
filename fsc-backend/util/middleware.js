const knex = require('../knex');

// Reusable error creator
const sendError = (res, statusCode = 500, message = 'Something went wrong.') => {
  res.status(statusCode).send({ error: { message } });
}

// Reusable handler for route responses
const handleResponse = (res, result) => {
  if (result && result.error) {
    sendError(res);
  } else {
    res.send(result);
  }
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

// Takes an array of required values and ensures body contains them
const validateRequiredValues = (values) => {
  return async (req, res, next) => {
    const violations = values.filter(value => {
      return !req.body[value]
    });
    if (violations.length > 0) {
      sendError(res, 400, `Please provide ${violations.join(', ')}.`);
    } else {
      next();
    }
  }
}

module.exports = {
  sendError,
  checkIfExists,
  validateRequiredValues,
  handleResponse
}
