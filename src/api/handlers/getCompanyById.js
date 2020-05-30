
const queries = require('../../db/queries')

module.exports = (req, res, next) => {
  if (isNaN(req.params.id)) {
    let error = new Error('Invalid id')
    error.status = 422
    next(error)
    return
  }

  return queries.selectCompanyById(req.params.id)
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