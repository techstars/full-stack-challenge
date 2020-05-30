
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

  it('GET all companies - return 200', (done) => {
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

  it('GET company by id - return 200', (done) => {
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
          date_founded: null
        })
        return done()
      })
  })

  it('GET company  id - return 422', (done) => {
    request(app)
      .get('/companies/x')
      .set('Accept', 'application/json')
      .expect(422, done)
  })

  it('GET company by id - return 404', (done) => {
    request(app)
      .get('/companies/99999')
      .set('Accept', 'application/json')
      .expect(404, done)
  })

  it('POST company - return 201', (done) => {
    request(app)
      .post('/companies')
      .set('Accept', 'application/json')
      .send({
        name: 'UnderStudy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat elit lorem. Curabitur dapibus neque id enim mollis, eget rhoncus arcu laoreet. Integer at sollicitudin velit. Ut laoreet ultrices sollicitudin. Quisque posuere mattis orci et viverra. Nullam id nibh malesuada nisi dignissim sollicitudin. Mauris in velit ac ipsum cursus interdum. Sed quam sem, tristique non ipsum nec, vulputate lacinia eros. Praesent et molestie magna.',
        city: 'Denver',
        state: 'Colorado',
        date_founded: null
      })
      .expect(201)
      .end((err, res) => {
        if (err) {
          return done(err)
        }

        expect(res.body).to.deep.equal({
          id: 13,
          name: 'UnderStudy',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat elit lorem. Curabitur dapibus neque id enim mollis, eget rhoncus arcu laoreet. Integer at sollicitudin velit. Ut laoreet ultrices sollicitudin. Quisque posuere mattis orci et viverra. Nullam id nibh malesuada nisi dignissim sollicitudin. Mauris in velit ac ipsum cursus interdum. Sed quam sem, tristique non ipsum nec, vulputate lacinia eros. Praesent et molestie magna.',
          city: 'Denver',
          state: 'Colorado',
          date_founded: null
        })

        return done()
      })
  })

  it('POST company - return 422', (done) => {
    request(app)
      .post('/companies')
      .set('Accept', 'application/json')
      .send({
        name: 'UnderStudy',
        description: '',
        city: 'Denver',
        state: 'Colorado',
        date_founded: new Date('05/04/2017')
      })
      .expect(422, done)
  })

  it('PUT company - return 200', (done) => {
    request(app)
      .put('/companies/1')
      .set('Accept', 'application/json')
      .send({
        name: 'Jetpulze',
        description: 'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
        city: 'Baton Rouge',
        state: 'Louisiana',
        date_founded: null,
      })
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }

        expect(res.body).to.deep.equal({
          id: 1,
          name: 'Jetpulze',
          description: 'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
          city: 'Baton Rouge',
          state: 'Louisiana',
          date_founded: null,
        })

        return done()
      })
  })

  it('PUT company - return 422', (done) => {
    request(app)
      .put('/companies/1')
      .set('Accept', 'application/json')
      .send({
        id: 1,
        name: '',
        description: '',
        city: 'Baton Rouge',
        state: 'Louisiana',
        date_founded: null,
      })
      .expect(422, done)
  })

  it('DELETE company and founders - return 204', (done) => {
    request(app)
      .delete('/companies/1')
      .set('Accept', 'application/json')
      .expect(204, done())
  })

  it('GET founders by company id - returns 200', (done) => {
    request(app)
      .get('/companies/1/founders')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }

        expect(res.body).to.have.length(2)
        return done()
      })
  })

  it('GET founders by company id - return 402', (done) => {
    request(app)
      .get('/companies/x/founders')
      .set('Accept', 'application/json')
      .expect(422, done)
  })

  it('POST founder - return 201', (done) => {
    request(app)
      .post('/founders')
      .set('Accept', 'application/json')
      .send({
        first_name: 'Coleman',
        last_name: 'Imhoff',
        title: 'Full Stack Developer',
        company_id: 2
      })
      .expect(201)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res.body).to.deep.equal({
          id: 14,
          first_name: 'Coleman',
          last_name: 'Imhoff',
          title: 'Full Stack Developer',
          company_id: 2
        })

        return done()
      })
  })
})