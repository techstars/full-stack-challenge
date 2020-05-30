
const queries = require('../../db/queries')

module.exports = (req, res, next) => {
  if (isNaN(req.params.id)) {
    let error = new Error('Invalid id')
    error.status = 422
    next(error)
    return
  }

  return queries.deleteCompanyAndFoundersById(req.params.id)
    .then(() => res.status(204).json())
    .catch(err => {
      let error = new Error(err)
      error.status = 500
      next(error)
      return
    })
}