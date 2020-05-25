import http from 'http';
import fetch from 'isomorphic-unfetch';
import listen from 'test-listen';
import { apiResolver } from 'next/dist/next-server/server/api-utils';
import handler from '../../pages/api/companies/index';
import idHandler from '../../pages/api/companies/[id]';

describe('Tests for companies API endpoint', () => {
  const massiveId = 9999999;
  let server;

  let companyId;
  const companyData = {
    name: 'testName',
    description: 'testDescription',
    city: 'Denver',
    state: 'CO',
    dateFounded: '2019-01-01'
  };
  const expectedCompanyData = { ...companyData };
  expectedCompanyData.date_founded = expectedCompanyData.dateFounded;
  delete expectedCompanyData.dateFounded;

  const companyDataUpdated = {
    name: 'testNameUpdated',
    description: 'testDescriptionUpdated',
    city: 'San Francisco',
    state: 'CA',
    dateFounded: '2020-02-02'
  };
  const expectedCompanyDataUpdated = { ...companyDataUpdated };
  expectedCompanyDataUpdated.date_founded = expectedCompanyDataUpdated.dateFounded;
  delete expectedCompanyDataUpdated.dateFounded;

  afterEach(() => {
    server && server.close();
  });

  test('Should return 201 with new company id on POST', async () => {
    server = http.createServer((req, res) => {
      // Must set request headers in here rather than in the fetch() call
      req.headers = {
        'Content-Type': 'application/json'
      };
      return apiResolver(req, res, undefined, handler)
    });
    const url = await listen(server);

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(companyData)
    });
    const jsonResult = await response.json();

    expect(response.status).toBe(201);
    expect(jsonResult).toHaveProperty('id');
    companyId = jsonResult.id;
  });

  test('Should return 200 with valid companies list on GET', async () => {
    server = http.createServer((req, res) => apiResolver(req, res, undefined, handler));
    const url = await listen(server);

    const response = await fetch(url);
    const jsonResult = await response.json();
    expect(response.status).toBe(200);
    expect(jsonResult.length).toBeGreaterThanOrEqual(1);
    expect(jsonResult[0]).toHaveProperty('id');
    expect(jsonResult[0]).toHaveProperty('name');
    expect(jsonResult[0]).toHaveProperty('description');
    expect(jsonResult[0]).toHaveProperty('city');
    expect(jsonResult[0]).toHaveProperty('state');
    expect(jsonResult[0]).toHaveProperty('date_founded');
  });

  test('Should return 200 with individual company detail data on GET with id', async () => {
    server = http.createServer((req, res) => {
      return apiResolver(req, res, { id: companyId }, idHandler)
    });
    const url = await listen(server) + '/' + companyId;

    const response = await fetch(url);
    const jsonResult = await response.json();
    expect(response.status).toBe(200);
    expect(jsonResult).toMatchObject(expectedCompanyData);
  });

  test('Should return 404 on GET with non-existant id', async () => {
    server = http.createServer((req, res) => {
      return apiResolver(req, res, { massiveId }, idHandler)
    });
    const url = await listen(server) + '/' + massiveId;

    const response = await fetch(url);
    expect(response.status).toBe(404);
  });

  test('Should return 200 with updated company data on PUT with id', async () => {
    server = http.createServer((req, res) => {
      // Must set request headers in here rather than in the fetch() call
      req.headers = {
        'Content-Type': 'application/json'
      };
      return apiResolver(req, res, { companyId }, idHandler)
    });
    const url = await listen(server) + '/' + companyId;;

    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(companyDataUpdated)
    });
    const jsonResult = await response.json();
    expect(response.status).toBe(200);
    expect(jsonResult).toMatchObject(expectedCompanyDataUpdated);
  });

  test('Should return 404 on PUT with non-existant id', async () => {
    server = http.createServer((req, res) => {
      // Must set request headers in here rather than in the fetch() call
      req.headers = {
        'Content-Type': 'application/json'
      };
      return apiResolver(req, res, { massiveId }, idHandler)
    });
    const url = await listen(server) + '/' + massiveId;;

    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(companyDataUpdated)
    });
    expect(response.status).toBe(404);
  });

  test('Should return 200 with updated company detail data on GET with id', async () => {
    server = http.createServer((req, res) => {
      return apiResolver(req, res, { companyId }, idHandler)
    });
    const url = await listen(server) + '/' + companyId;

    const response = await fetch(url);
    const jsonResult = await response.json();
    expect(response.status).toBe(200);
    expect(jsonResult).toMatchObject(expectedCompanyDataUpdated);
  });

  test('Should return 204 with no data on DELETE with existing id', async () => {
    server = http.createServer((req, res) => {
      return apiResolver(req, res, { companyId }, idHandler)
    });
    const url = await listen(server) + '/' + companyId;

    const response = await fetch(url, {
      method: 'DELETE'
    });
    const jsonResult = await response.json();
    expect(response.status).toBe(204);
    expect(jsonResult).toBeNull();
  });
});