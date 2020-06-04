const formatFounderPostData = data => ({
  firstName: data.firstName,
  lastName: data.lastName,
  title: data.title,
  companyId: data.companyId,
  created_at: new Date(Date.now()),
  updated_at: new Date(Date.now())
});

const formatFounderPatchData = (founder, data) => {
  const newObject = {
    firstName: data.firstName ? data.firstName : founder.firstName,
    lastName: data.lastName ? data.lastName : founder.lastName,
    title: data.title ? data.title : founder.title,
    companyId: data.companyId ? data.companyId : founder.companyId,
    updated_at: new Date(Date.now())
  }
  return newObject;
}

module.exports = {
  formatFounderPatchData,
  formatFounderPostData
}
