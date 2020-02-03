export const getLocation = (company) => {
  let locationFields = [];
  if(company.city)  locationFields.push(company.city)
  if(company.state) locationFields.push(company.state)
  return locationFields.join(", ")
}

export default {
  getLocation
}