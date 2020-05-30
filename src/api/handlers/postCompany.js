
const isValidCompanyRequest = require('../validators').isValidCompanyRequest
const queries = require('../../db/queries')

module.exports = (req, res, next) => {
  if (!isValidCompanyRequest(req)) {
    let error = new Error('Complete all required fields')
    error.status = 422
    next(error)
    return
  }

  return queries.postCompany(req.body)
    .then(result => res.status(201).json(result[0]))
    .catch(err => {
      let error = new Error(err)
      error.status = 500
      next(error)
      return
    })
}