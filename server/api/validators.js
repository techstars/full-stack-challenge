
module.exports = {
  isInvalidCompanyRequest(req) {
    const validName = req.body.name.trim() !== ''
    const validDescription = req.body.description.trim() !== ''
    const validCity = req.body.city.trim() !== ''
    const validState = req.body.state.trim() !== ''

    if (validName && validDescription && validCity && validState) {
      return false
    }

    return true
  },
  isInvalidFounderRequest(req) {
    const validFirstName = req.body.first_name.trim() !== ''
    const validLastName = req.body.last_name.trim() !== ''
    const validTitle = req.body.title.trim() !== ''
    const validCompanyId = !isNaN(req.params.id)

    if (validFirstName && validLastName && validTitle && validCompanyId) {
      return false
    }

    return true
  }
}