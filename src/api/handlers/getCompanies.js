
const queries = require('../../db/queries')

module.exports = (_, res, next) => {
  return queries.getCompanies()
    .then(results => res.json(results))
    .catch(err => {
      let error = new Error(err)
      error.status = 500
      next(error)
      return
    })
}