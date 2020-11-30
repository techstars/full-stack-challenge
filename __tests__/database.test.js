const companies = require('../server/models/companies');
const founders = require('../server/models/founders');
const { Client } = require('pg');

process.env.DB_USER = 'postgres'
process.env.DB_HOST = 'localhost'
process.env.DB_PWD = '2327'
process.env.DB_DB = 'techstars-test'
process.env.DB_PORT = '5432'

const testCompanies =  [
  {
      _id: 1,
      name: 'Test Company 1',
      city: 'Denver',
      state: 'CO',
      founded: '2020-04-12',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
      _id: 2,
      name: 'Test Company 2',
      city: 'Springfield',
      state: 'MO',
      founded: '2020-05-11',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
      _id: 3,
      name: 'Test Company 3',
      city: 'Kalispell',
      state: 'MT',
      founded: '2019-11-19',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
]

const testFounders = [
  [{name: 'Bob', title: 'Test'}],
  [{name: 'Chris', title: 'CEO'}, {name: 'Bob', title: 'Test'}],
  [{name: 'Chris', title: 'CEO'}, {name: 'Bob', title: 'Test'}, {name: 'Bob', title: 'Test'},{name: 'Bob', title: 'Test'}]
]

describe('Database queries, ', () => {

  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DB,
    password: process.env.DB_PWD,
    port: process.env.DB_PORT,
  })

  beforeAll(() => {
    client.connect();
  })

  beforeEach(async() => {
    try{


      await client.query('DROP TABLE IF EXISTS founders');
      await client.query('DROP TABLE IF EXISTS companies');

      await client.query('CREATE TABLE companies(_id SERIAL PRIMARY KEY, name VARCHAR(100), city VARCHAR(100), state VARCHAR(100), founded DATE, description text)');

      await client.query('CREATE TABLE founders(_id SERIAL PRIMARY KEY, name VARCHAR(100), title VARCHAR(100), company_id INT, CONSTRAINT fk_companies FOREIGN KEY(company_id) REFERENCES companies(_id))');

      await client.query('INSERT INTO companies(name, city, state, founded, description) VALUES($1, $2, $3, $4, $5)', [testCompanies[0].name, testCompanies[0].city, testCompanies[0].state, testCompanies[0].founded, testCompanies[0].description]);

      await client.query('INSERT INTO founders(name, title, company_id) VALUES($1, $2, $3)', [testFounders[0][0].name, testFounders[0][0].name, 1]);
    } catch (err) {
      console.log(err);
    }

  })

  afterAll(() => {
    client.end();
  })

  test('should get all companies', async () => {
    const list = await companies.getAllCompanies();
    expect(list[0]['city']).toBe('Denver');
  })

  test('should get one company', async () => {
    const list = await companies.getOneCompany([1]);
    expect(list['city']).toBe('Denver');
  })

  test('should add company', async() => {
    await companies.addCompany([testCompanies[1].name, testCompanies[1].city, testCompanies[1].state, testCompanies[1].founded, testCompanies[1].description]);
    const list = await companies.getOneCompany([2]);
    expect(list['city']).toBe('Springfield');
  })

  test('should update company', async() => {
    await companies.updateCompany([testCompanies[0].name, 'Boulder', testCompanies[0].state, testCompanies[0].founded, testCompanies[0].description, 1]);

    const list = await companies.getOneCompany([1]);
    expect(list['city']).toBe('Boulder');
  })

  test('should delete company', async() => {
    await companies.deleteCompany([1]);

    const list = await companies.getOneCompany([1]);
    expect(list).toBe(undefined);
  })

  test('should get all founders', async () => {
    const list = await founders.getAllFounders();
    expect(list.rows[0]['name']).toBe('Bob');
  })

  test('should get company founders', async () => {
    const list = await founders.getCompanyFounders([1]);
    expect(list[0]['name']).toBe('Bob');
  })

  test('should add founder to a company', async() => {
    await founders.addFounder([testFounders[1][0].name, testFounders[1][0].title, 1]);
    const list = await founders.getCompanyFounders([1]);
    expect(list[1]['name']).toBe('Chris');
  })

})