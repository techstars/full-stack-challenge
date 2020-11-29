const faker = require('faker')
const fs = require('fs')
const fakerFuncs = require('./faker_functions.js')

const writeCompanies = fs.createWriteStream('./companies_seed.csv');
const writeFounders = fs.createWriteStream('./founders_seed.csv');

const generateXReviews = (writeCompanies, writeFounders, number, encoding, cb) => {
  function write() {
      for (let i = 1; i <= number; i++) {
        let numFounders = faker.random.number({'min': 1, 'max': 5})
        for (let j = 0; j < numFounders; j++) {
          let founder = JSON.stringify(fakerFuncs.createFounder(i))
          writeFounders.write(founder, encoding)
        }
        let company = JSON.stringify(fakerFuncs.createCompany())
        writeCompanies.write(company, encoding)
        if (i === number) {
          cb();
        }
      }
    }
    write()
  }

generateXReviews(writeCompanies, writeFounders, 15, 'utf-8', () => {
  writeCompanies.end();
  writeFounders.end()
})
