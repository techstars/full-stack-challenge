const company = require('./company');
const founder = require('./founder');

// Based on the data type and the request type, direct call to different formatters

const formatPostData = (data, resourceType) => {
  switch (resourceType) {
    case 'companies':
      return company.formatCompanyPostData(data);
    case 'founders':
      return founder.formatFounderPostData(data);
    default:
      return null;
  }
}

const formatPatchData = (existingObject, data, resourceType) => {
  switch (resourceType) {
    case 'companies':
      return company.formatCompanyPatchData(existingObject, data);
    case 'founders':
      return founder.formatFounderPatchData(existingObject, data);
    default:
      return null;
  }
}

module.exports = {
  formatPostData,
  formatPatchData
}
