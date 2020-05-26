import http from 'http';
import fetch from 'isomorphic-unfetch';
import listen from 'test-listen';
import { apiResolver } from 'next/dist/next-server/server/api-utils';
import companiesHandler from '../../pages/api/companies/index';
import handler from '../../pages/api/companyFounders/index';
import idHandler from '../../pages/api/companyFounders/[companyId]';

describe('Tests for companyFounders API endpoint', () => {
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

  const companyFounderIds = [];
  const companyFounderData = {
    companyId: null,
    name: 'Test Founder Name',
    title: 'CEO'
  };
  const expectedCompanyFounderData = { ...companyFounderData };
  expectedCompanyFounderData.company_id = expectedCompanyFounderData.companyId;
  delete expectedCompanyFounderData.companyId;

  beforeAll(async () => {
    server = http.createServer((req, res) => {
      // Must set request headers in here rather than in the fetch() call
      req.headers = {
        'Content-Type': 'application/json'
      };
      return apiResolver(req, res, undefined, companiesHandler)
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
    server.close();
  });

  afterEach(() => {
    server && server.close();
  });
  
  test('Should return 404 on GET with existant company id that has no founders', async () => {
    server = http.createServer((req, res) => {
      return apiResolver(req, res, { id: companyId }, idHandler)
    });
    const url = await listen(server) + '/' + companyId;

    const response = await fetch(url);
    expect(response.status).toBe(404);
  });

  test('Should return 201 with new company founder id on POST', async () => {
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
      body: JSON.stringify(companyFounderData)
    });
    const jsonResult = await response.json();

    expect(response.status).toBe(201);
    expect(jsonResult).toHaveProperty('id');
    companyFounderIds.push(jsonResult.id);
  });

  test('Should return 200 with valid company founders for a company on GET with id', async () => {
    server = http.createServer((req, res) => {
      return apiResolver(req, res, { id: companyId }, idHandler)
    });
    const url = await listen(server) + '/' + companyId;

    const response = await fetch(url);
    const jsonResult = await response.json();
    expect(response.status).toBe(200);
    expect(jsonResult.length).toBeGreaterThanOrEqual(1);
    expect(jsonResult[0]).toHaveProperty('id');
    expect(jsonResult[0]).toHaveProperty('company_id');
    expect(jsonResult[0]).toHaveProperty('name');
    expect(jsonResult[0]).toHaveProperty('title');
  });

  test('Should return 404 on GET with non-existant company id', async () => {
    server = http.createServer((req, res) => {
      return apiResolver(req, res, { id: massiveId }, idHandler)
    });
    const url = await listen(server) + '/' + massiveId;

    const response = await fetch(url);
    expect(response.status).toBe(404);
  });
});