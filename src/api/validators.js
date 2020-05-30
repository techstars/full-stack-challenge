
module.exports = {
  isValidCompanyRequest(req) {
    const validName = req.body.name.trim() !== ''
    const validDescription = req.body.description.trim() !== ''
    const validCity = req.body.city.trim() !== ''
    const validState = req.body.state.trim() !== ''

    if (validName && validDescription && validCity && validState) {
      return true
    }

    return false

  },
  isValidId(req) {
    return !isNaN(req.params.id)
  }
}