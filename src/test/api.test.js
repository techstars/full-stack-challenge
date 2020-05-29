
const knex = require('../db/connection')
const request = require('supertest')
const expect = require('chai').expect

const app = require('../index')

describe('Migrate and Seed', (done) => {
  knex.migrate.latest()
    .then(() => knex.seed.run())
    .then(done)
})

describe('GET All Companies', (done) => {
  request(app)
    .get('/companies')
    .set('Accept', 'application/json')
    .then(expect(200, done))
})