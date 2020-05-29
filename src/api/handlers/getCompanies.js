
const queries = require('../../db/queries')

module.exports = function (_, res, next) {
  return queries.getCompanies()
    .then(companies => res.json(companies))
    .catch(err => {
      const error = new Error(err)
      error.status = 500
      next(error)
    })
}