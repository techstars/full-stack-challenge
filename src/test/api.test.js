
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

  it('GET company and founders by id', (done) => {
    request(app)
      .get('/companies/1')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res.body).to.deep.equal({
          id: 1,
          name: 'Jetpulse',
          description: 'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
          city: 'Baton Rouge',
          state: 'Louisiana',
          date_founded: null,
          founders: [
            {
              id: 11,
              first_name: 'Willey',
              last_name: 'Satch',
              title: 'Analog Circuit Design manager',
              company_id: 1
            },
            {
              id: 12,
              first_name: 'Brev',
              last_name: 'Goodman',
              title: 'Super Senior Full Stack Developer',
              company_id: 1
            }
          ]
        })
        return done()
      })
  })

  it('GET company and founders by id - throws 422', (done) => {
    request(app)
      .get('/companies/x')
      .set('Accept', 'application/json')
      .expect(422, done)
  })

  it('GET company and founders by id - throws 404', (done) => {
    request(app)
      .get('/companies/99999')
      .set('Accept', 'application/json')
      .expect(404, done)
  })
})