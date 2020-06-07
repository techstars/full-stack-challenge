const request = require('supertest');
const app = require('../app');
const fx = require ('./fixtures');
const knex = require('../knex');

afterAll(async done => {
  await knex.destroy();
  done();
})

describe('Companies endpoints', () => {
  it ('should list all companies', async () => {
    const response = await request(app)
      .get('/companies/');

    expect(response.statusCode).toEqual(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it ('should get one company', async () => {
    const response = await request(app)
      .get('/companies/1');

    expect(response.statusCode).toEqual(200);
    expect(response.body.city).toEqual('El Paso');
    expect(response.body.founders.length).toEqual(1);
  });

  it ('should post a company', async () => {
    const response = await request(app)
      .post('/companies/')
      .send(fx.testCompany);

    expect(response.statusCode).toEqual(200);
    expect(response.body.city).toEqual('Alexamplia');
  });

  it ('should update a company', async () => {
    const response = await request(app)
      .patch('/companies/3')
      .send({ city: 'London' });

    expect(response.statusCode).toEqual(200);
    expect(response.body.city).toEqual('London');
  })

  it ('should delete a company', async () => {
    const response = await request(app)
      .delete('/companies/3');

    expect(response.statusCode).toEqual(200);
    expect(response.body.city).toEqual('London');

    const deleteCheck = await request(app)
      .get('/companies/3');

    expect(deleteCheck.statusCode).toEqual(404);

    const founderCheck = await request(app)
      .get('/founders/4');
    
    expect(founderCheck.statusCode).toEqual(404);
  })
});
