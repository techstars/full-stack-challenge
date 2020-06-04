const formatCompanyPostData = data => ({
  name: data.name,
  city: data.city,
  state: data.state,
  description: data.description,
  foundedDate: data.foundedDate || null
});

const formatCompanyPatchData = (company, data) => {
  const newObject = {
    name: data.name ? data.name : company.name,
    city: data.city ? data.city : company.city,
    state: data.state ? data.state : company.state,
    description: data.description ? data.description : company.description,
    foundedDate: data.foundedDate ? data.foundedDate: company.foundedDate
  }
  return newObject;
}

module.exports = {
  formatCompanyPatchData,
  formatCompanyPostData
}
