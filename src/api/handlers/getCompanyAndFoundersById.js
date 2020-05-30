
const queries = require('../../db/queries')
const isValidId = require('../validators').isValidId

module.exports = (req, res, next) => {
  if (!isValidId(req)) {
    let error = new Error('Invalid id')
    error.status = 422
    next(error)
    return
  }

  return queries.getCompanyById(req.params.id)
    .then(result => {
      if (result) {
        return res.json(result)
      }

      let error = new Error('Not found')
      error.status = 404
      next(error)
      return
    })
    .catch(err => {
      let error = new Error(err)
      error.status = 500
      next(error)
      return
    })
}