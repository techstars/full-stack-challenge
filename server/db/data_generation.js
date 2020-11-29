const faker = require('faker')
const fakerFuncs = require('./faker_functions.js')
const axios = require('axios');

const generateXEntries = async (number) => {


  for (let i = 1; i <= number; i++) {
      let company = fakerFuncs.createCompany()
      await axios.post('http://localhost:3000/companies', company);
      let numFounders = faker.random.number({'min': 1, 'max': 5})
        for (let j = 0; j < numFounders; j++) {
          let founder = fakerFuncs.createFounder(i)
          await axios.post(`http://localhost:3000/founders/${i}`, founder);
        }
  }


  }

generateXEntries(15)
