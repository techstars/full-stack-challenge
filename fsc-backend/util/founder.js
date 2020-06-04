const formatFounderPostData = data => ({
  firstName: data.firstName,
  lastName: data.lastName,
  title: data.title,
  companyId: data.companyId
});

const formatFounderPatchData = (founder, data) => {
  const newObject = {
    firstName: data.firstName ? data.firstName : founder.firstName,
    lastName: data.lastName ? data.lastName : founder.lastName,
    title: data.title ? data.title : founder.title,
    companyId: data.companyId ? data.companyId : founder.companyId
  }
  return newObject;
}

module.exports = {
  formatFounderPatchData,
  formatFounderPostData
}
