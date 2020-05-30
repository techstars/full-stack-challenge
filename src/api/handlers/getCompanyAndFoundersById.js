
const queries = require('../../db/queries')

module.exports = function (req, res, next) {
  if (isNaN(req.params.id)) {
    const err = new Error('Unprocessable Entity')
    err.status = 422
    next(err)
  }

  return queries.getCompanyById(req.params.id)
    .then(result => {
      if (result) {
        return res.json(result)
      }

      const err = new Error('Not found')
      err.status = 404
      next(err)
    })
    .catch(err => {
      const error = new Error(err)
      error.status = 500
      next(error)
    })
}