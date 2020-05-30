
const isInvalidFounderRequest = require('../validators').isInvalidFounderRequest
const queries = require('../../db/queries')

module.exports = (req, res, next) => {
  if (!isInvalidFounderRequest) {
    let error = new Error('Complete all required fields')
    error.status = 422
    next(error)
    return
  }

  return queries.insertFounder(req.body)
    .then(result => res.status(201).json(result[0]))
    .catch(err => {
      let error = new Error(err)
      error.status = 500
      next(error)
      return
    })
}