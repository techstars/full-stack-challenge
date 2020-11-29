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

describe('Server endpoints, ', () => {
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
})