const request = require('supertest');
const app = require('../app');
const fx = require ('./fixtures');
const knex = require('../knex');

afterAll(async done => {
  await knex.destroy();
  done();
})

describe('Founders endpoints', () => {
  it ('should list all founders', async () => {
    const response = await request(app)
      .get('/founders/');

    expect(response.statusCode).toEqual(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it ('should get one founder', async () => {
    const response = await request(app)
      .get('/founders/1');

    expect(response.statusCode).toEqual(200);
    expect(response.body.lastName).toEqual('Leviathan');
  });

  it ('should post a founder', async () => {
    const response = await request(app)
      .post('/founders/')
      .send(fx.testFounder);

    expect(response.statusCode).toEqual(200);
    expect(response.body.lastName).toEqual('Jimboroni');
  });

  it ('should update a founder', async () => {
    const response = await request(app)
      .patch('/founders/3')
      .send({ lastName: 'Exampleson' });

    expect(response.statusCode).toEqual(200);
    expect(response.body.lastName).toEqual('Exampleson');
  })

  it ('should delete a founder', async () => {
    const response = await request(app)
      .delete('/founders/3');

    expect(response.statusCode).toEqual(200);
    expect(response.body.lastName).toEqual('Exampleson');

    const deleteCheck = await request(app)
      .get('/founders/3');

    expect(deleteCheck.statusCode).toEqual(404);
  })
});
