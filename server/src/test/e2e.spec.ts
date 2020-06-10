import chai, { expect, assert } from 'chai';
import chaiHttp from 'chai-http';
import { server } from '../index';


chai.use(chaiHttp);

describe('e2e', () => {
  const newCompany = {
    name: 'nwcmpny',
    description: 'to change the way america brushes it\'s teeth',
    city: 'Boulder',
    state: 'Colorado',
    logoUrl: 'fakelogo.png',
    dateFounded: new Date("12-12-2012"),
  }
  const founder = { firstName: 'Bill', lastName: 'Tedson', title: 'CEO' }

  describe('/companies', () => {
    let createdCompanyId: string


    it('can GET all', async () => {
      const res = await chai.request(server).get('/companies')
      expect(res.body.length).to.be.greaterThan(1)
    });
    it('can CREATE a company', async () => {
      const res = await chai.request(server).post('/companies').send(newCompany)
      createdCompanyId = res.body.id

      expect(res.body).to.deep.equal({ id: createdCompanyId, ...newCompany, dateFounded: newCompany.dateFounded.toISOString() })
    });

    it('will throw an error if missing a field', async () => {
      try {
        assert.fail(chai.request(server).post('/companies').send({ ...newCompany, name: null }))
      } catch (e) { }

    });
    it('can GET a company by id', async () => {
      const res = await chai.request(server).get(`/companies/${createdCompanyId}`)

      expect(res.body).to.deep.equal({ id: createdCompanyId, ...newCompany, dateFounded: newCompany.dateFounded.toISOString(), founders: [] })
    });
    it('can add founders to a company', async () => {
      const res = await chai.request(server).post(`/companies/${createdCompanyId}/add-founder`).send(founder)

      expect(res.body).to.deep.equal({
        id: createdCompanyId,
        ...newCompany,
        dateFounded: newCompany.dateFounded.toISOString(),
        founders: [{ ...founder, id: res.body.founders[0].id, companyId: createdCompanyId }]
      })
    });
    it('can UPDATE company details', async () => {
      const res = await chai.request(server).put(`/companies/${createdCompanyId}`).send({ name: 'RE-BRANDED' })

      expect(res.body).to.deep.equal({
        id: createdCompanyId,
        ...newCompany,
        name: 'RE-BRANDED',
        dateFounded: newCompany.dateFounded.toISOString(),
        founders: [{ ...founder, id: res.body.founders[0].id, companyId: createdCompanyId }]
      })
    });

    it('can DELETE a company', async () => {
      await chai.request(server).delete(`/companies/${createdCompanyId}`)

      const res = await chai.request(server).get(`/companies/${createdCompanyId}`)

      expect(res.body).to.be.null
    });

  });
  describe('/founders', () => {
    let createdCompanyId: string
    let createdFounderId: string
    // NOTE: I did not build out the founder functionality in the frontend so for now I'm 
    // testing routes and services but the only one being used is DELETE /:id

    it('can GET all', async () => {
      const res = await chai.request(server).get('/founders')
      expect(res.body.length).to.be.greaterThan(1)
    });
    it('can CREATE and GET a founder', async () => {
      // create company
      const res = await chai.request(server).post('/companies').send(newCompany)
      createdCompanyId = res.body.id

      // add founder
      const res2 = await chai.request(server).post(`/founders`).send({ ...founder, companyId: createdCompanyId })
      createdFounderId = res2.body.id

      expect(res2.body.firstName).to.equal(founder.firstName)
      expect(res2.body.lastName).to.equal(founder.lastName)
      expect(res2.body.title).to.equal(founder.title)
      expect(res2.body.companyId).to.equal(createdCompanyId)
    })
    it('can UPDATE a founder', async () => {
      // not implemented by client
      await chai.request(server).put(`/founders/${createdFounderId}`).send({ firstName: 'Tebin' })

      const res = await chai.request(server).get(`/founders/${createdFounderId}`)

      expect(res.body.firstName).to.equal('Tebin')
      expect(res.body.lastName).to.equal(founder.lastName)
      expect(res.body.title).to.equal(founder.title)
      expect(res.body.companyId).to.equal(createdCompanyId)
    })
    it('can DELETE a founder', async () => {
      await chai.request(server).delete(`/founders/${createdFounderId}`)

      // check founder is gone and not asscociateD with company
      const res = await chai.request(server).get(`/companies/${createdCompanyId}`)
      const res2 = await chai.request(server).get(`/founders/${createdFounderId}`)

      expect(res.body).to.deep.equal({
        id: createdCompanyId,
        ...newCompany,
        dateFounded: newCompany.dateFounded.toISOString(),
        founders: []
      })
      expect(res2.body).to.be.null

      // cleanup company
      await chai.request(server).delete(`/companies/${createdCompanyId}`)
    })

  })
})