
const knex = require('../db/connection')
const request = require('supertest')
const expect = require('chai').expect

const app = require('../index')

describe('Api Endpoints', () => {
  before((done) => {
    knex.migrate.latest()
      .then(() => knex.seed.run())
      .then(() => done())
  })

  it('GET all companies', (done) => {
    request(app)
      .get('/companies')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res.body).to.have.length(12)
        return done()
      })
  })
})