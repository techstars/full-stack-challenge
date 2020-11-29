const faker = require('faker')
const fakerFuncs = require('./faker_functions.js')
const companies = require('../models/companies.js');
const founders = require('../models/founders.js');

const generateXReviews = async (number) => {


  for (let i = 1; i <= number; i++) {
    try{
      let company = fakerFuncs.createCompany()
      // let addedcompany = await companies.addCompany(company)
      let numFounders = faker.random.number({'min': 1, 'max': 5})
        for (let j = 0; j < numFounders; j++) {
          let founder = fakerFuncs.createFounder(i)
          let addedfounder = await founders.addFounder(founder)
        }
    } catch(err) {
      console.log(err)
    }
  }


  }

generateXReviews(15)
