const faker = require('faker')

const createCompany = () => {
  const name = faker.company.companyName()
  const city = faker.address.city()
  const state = faker.address.state()
  const year = faker.random.number({'min': 2000, 'max': 2019})
  const month = faker.random.number({'min': 1, 'max': 12})
  const day = faker.random.number({'min': 1, 'max': 28})
  const founded = year + '-' + (month < 10 ? ('0' + month) : month) + '-' + (day < 10 ? ('0' + day) : day)
  const description = faker.lorem.paragraph(6)

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

