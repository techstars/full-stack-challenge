
const isInvalidCompanyRequest = require('../validators').isInvalidCompanyRequest
const queries = require('../../db/queries')

module.exports = (req, res, next) => {
  if (isInvalidCompanyRequest(req)) {
    let error = new Error('Complete all required fields')
    error.status = 422
    next(error)
    return
  }

  const newCompany = {
    name: req.body.name,
    description: req.body.description,
    city: req.body.city,
    state: req.body.state,
    date_founded: new Date(req.body.date_founded)
  }

  return queries.insertCompany(newCompany)
    .then(result => res.status(201).json(result[0]))
    .catch(err => {
      let error = new Error(err)
      error.status = 500
      next(error)
      return
    })
}