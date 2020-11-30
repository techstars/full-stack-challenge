const app = require('../server/server.js');
const supertest = require('supertest');
const request = supertest(app);
const companies = require('../server/models/companies');
const founders = require('../server/models/founders');

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

const allCompanies = [{"_id": 1, "city": "Denver", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "founded": "2020-04-12", "founders": [{"name": "Bob", "title": "Test"}], "name": "Test Company 1", "state": "CO"}, {"_id": 2, "city": "Springfield", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "founded": "2020-05-11", "founders": [{"name": "Chris", "title": "CEO"}, {"name": "Bob", "title": "Test"}], "name": "Test Company 2", "state": "MO"}, {"_id": 3, "city": "Kalispell", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "founded": "2019-11-19", "founders": [{"name": "Chris", "title": "CEO"}, {"name": "Bob", "title": "Test"}, {"name": "Bob", "title": "Test"}, {"name": "Bob", "title": "Test"}], "name": "Test Company 3", "state": "MT"}]

test('GET / should return status 200', async () => {
  const res = await request.get('/');

  expect(res.status).toBe(200)
})

describe('/companies endpoints, ', () => {


  test('GET /companies should return list of companies and status 200', async () => {
    companies.getAllCompanies = jest.fn();
    companies.getAllCompanies.mockResolvedValue(testCompanies);
    founders.getCompanyFounders = jest.fn();
    founders.getCompanyFounders.mockResolvedValueOnce(testFounders[0]);
    founders.getCompanyFounders.mockResolvedValueOnce(testFounders[1]);
    founders.getCompanyFounders.mockResolvedValueOnce(testFounders[2]);
    const res = await request.get('/companies');

    expect(res.status).toBe(200)

    expect(res.body).toMatchObject(allCompanies)
  })

  test('GET /companies should return status 500 on error', async () => {
    companies.getAllCompanies = jest.fn();
    companies.getAllCompanies.mockRejectedValue();
    const res = await request.get('/companies');

    expect(res.status).toBe(500)
  })

  test('GET /companies/:company_id should return one company and status 200', async () => {
    companies.getOneCompany = jest.fn();
    companies.getOneCompany.mockResolvedValue(testCompanies[0]);
    founders.getCompanyFounders = jest.fn();
    founders.getCompanyFounders.mockResolvedValueOnce(testFounders[0]);
    const res = await request.get('/companies/1');

    expect(res.status).toBe(200)

    expect(res.body).toMatchObject(allCompanies[0])
  })

  test('GET /companies/:company_id should return status 500 on error', async () => {
    companies.getOneCompany = jest.fn();
    companies.getOneCompany.mockRejectedValue();
    const res = await request.get('/companies/1');

    expect(res.status).toBe(500)
  })

  test('POST /companies should add company and return status 201', async () => {
    companies.addCompany = jest.fn();
    companies.addCompany.mockResolvedValue(null);
    const res = await request.post('/companies').send(testCompanies[0]);

    expect(res.status).toBe(201)

    expect(companies.addCompany).toHaveBeenCalledWith([testCompanies[0].name, testCompanies[0].city, testCompanies[0].state, testCompanies[0].founded, testCompanies[0].description])
  })

  test('POST /companies should return status 500 on error', async () => {
    companies.addCompany = jest.fn();
    companies.addCompany.mockRejectedValue();
    const res = await request.post('/companies', testCompanies[0]);

    expect(res.status).toBe(500)
  })

  test('PUT /companies/:company_id should add company and return status 202', async () => {
    companies.updateCompany = jest.fn();
    companies.updateCompany.mockResolvedValue(null);
    const res = await request.put('/companies/1').send(testCompanies[0]);

    expect(res.status).toBe(202)

    expect(companies.updateCompany).toHaveBeenCalledWith([testCompanies[0].name, testCompanies[0].city, testCompanies[0].state, testCompanies[0].founded, testCompanies[0].description, 1])
  })

  test('POST /companies/:company_id should return status 500 on error', async () => {
    companies.updateCompany = jest.fn();
    companies.updateCompany.mockRejectedValue();
    const res = await request.put('/companies/1', testCompanies[0]);

    expect(res.status).toBe(500)
  })

  test('DELETE /companies/:company_id should delete company and return status 202', async () => {
    companies.deleteCompany = jest.fn();
    companies.deleteCompany.mockResolvedValue(null);
    const res = await request.delete('/companies/1');

    expect(res.status).toBe(200)

    expect(companies.deleteCompany).toHaveBeenCalledWith([1])
  })

  test('DELETE /companies should return status 500 on error', async () => {
    companies.deleteCompany = jest.fn();
    companies.deleteCompany.mockRejectedValue();
    const res = await request.delete('/companies/1');

    expect(res.status).toBe(500)
  })
})

describe('/founders endpoints', () => {
  test('GET /founders should return list of companies and status 200', async () => {
    founders.getAllFounders = jest.fn();
    founders.getAllFounders.mockResolvedValue(testFounders);
    const res = await request.get('/founders');

    expect(res.status).toBe(200)

    expect(res.body).toMatchObject(testFounders)
  })

  test('GET /founders should return status 500 on error', async () => {
    founders.getAllFounders = jest.fn();
    founders.getAllFounders.mockRejectedValue();
    const res = await request.get('/founders');

    expect(res.status).toBe(500)
  })

  test('GET /founders/:company_id should return one company and status 200', async () => {
    founders.getCompanyFounders = jest.fn();
    founders.getCompanyFounders.mockResolvedValueOnce(testFounders[0]);
    const res = await request.get('/founders/1');

    expect(res.status).toBe(200)
    expect(founders.getCompanyFounders).toHaveBeenCalledWith([1])
    expect(res.body).toMatchObject(testFounders[0])
  })

  test('GET /companies/:company_id should return status 500 on error', async () => {
    founders.getCompanyFounders = jest.fn();
    founders.getCompanyFounders.mockRejectedValue(null);
    const res = await request.get('/founders/1');

    expect(res.status).toBe(500)
  })

  test('POST /companies should add company and return status 201', async () => {
    founders.addFounder = jest.fn();
    founders.addFounder.mockResolvedValue(null);
    const res = await request.post('/founders/1').send(testFounders[0][0]);

    expect(res.status).toBe(201)

    expect(founders.addFounder).toHaveBeenCalledWith([testFounders[0][0].name, testFounders[0][0].title, 1])
  })

  test('POST /companies should return status 500 on error', async () => {
    founders.addFounder = jest.fn();
    founders.addFounder.mockRejectedValue(null);
    const res = await request.post('/founders/1');

    expect(res.status).toBe(500)
  })

})

