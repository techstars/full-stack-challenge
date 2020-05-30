
const isInvalidCompanyRequest = require('../validators').isInvalidCompanyRequest
const queries = require('../../db/queries')

module.exports = (req, res, next) => {
  if (isInvalidCompanyRequest(req)) {
    let error = new Error('Complete all required fields')
    error.status = 422
    next(error)
    return
  }

  return queries.putCompany(req.params.id, req.body)
    .then(result => res.status(200).json(result[0]))
    .catch(err => {
      let error = new Error(err)
      error.status = 500
      next(error)
      return
    })
}