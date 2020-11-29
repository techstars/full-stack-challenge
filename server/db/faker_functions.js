const faker = require('faker')

const createCompany = () => {
  const name = faker.company.companyName()
  const city = faker.address.city()
  const state = faker.address.state()
  let founded = faker.date.past(5)
  founded = founded.getFullYear() + '-' + (founded.getMonth() < 10 ? ('0' + founded.getMonth()) : founded.getMonth()) + '-' + (founded.getDate() < 10 ? ('0' + founded.getDate()) : founded.getDate() > 28 ? founded.getDate() - 4 : founded.getDate())
  const description = faker.lorem.paragraph(4)

  const output = {
    name,
    city,
    state,
    founded,
    description,
  }
  return output
}

// create product and populate with random num of reviews
const createFounder = (id) => {

    let name = faker.name.findName()
    let title = faker.name.jobTitle()
    let output = {
      name,
      title,
      company_id: id,
    }

  return output;
}

module.exports = {
  createFounder,
  createCompany,
}

