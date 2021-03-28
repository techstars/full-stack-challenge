import 'regenerator-runtime/runtime';
import request from 'supertest';
import app from '../server';

describe('Company API Endpoints', () => {
  it('should create a new company', async () => {
    const res = await request(app)
      .post('/company')
      .send({
        name: "Jessica",
        city: 'Denver',
        state: 'CO',
        description: 'Some description'
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body.name).toBe("Jessica");
    expect(res.body.city).toBe("Denver");
    expect(res.body.state).toBe("CO");
    expect(res.body.description).toBe("Some description");
  });

  it('should not create a new company on missing required params', async () => {
    const res = await request(app)
      .post('/company')
      .send({
        name: "Jessica",
        city: 'Denver',
        description: 'Some description'
      })
    expect(res.statusCode).toEqual(400);
  });

  it('should get a company by id', async () => {
    const company = await request(app)
      .post('/company')
      .send({
        name: "Jessica Hardware Shop",
        city: 'Denver',
        state: 'CO',
        description: 'Some description'
    });

    const res = await request(app)
    .get(`/company/${company.body.id}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body[0].name).toBe(company.body.name);
    expect(res.body[0].id).toBe(company.body.id);
    expect(res.body[0].city).toBe(company.body.city);
    expect(res.body[0].state).toBe(company.body.state);
    expect(res.body[0].description).toBe(company.body.description);
  });

  it('should get all companies', async () => {
    const res = await request(app)
    .get(`/company`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should update company by id', async () => {
    const company = await request(app)
      .post('/company')
      .send({
        name: "Jessica Hardware Shop",
        city: 'Denver',
        state: 'CO',
        description: 'Some description'
    });

    //Updating
    await request(app)
    .put(`/company/${company.body.id}`)
    .send({
      name: company.body.name,
      city: 'Los Angeles',
      state: 'CA',
      description: company.body.description
    });
    
    const res = await request(app)
    .get(`/company/${company.body.id}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body[0].name).toBe(company.body.name);
    expect(res.body[0].id).toBe(company.body.id);
    expect(res.body[0].city).toBe('Los Angeles');
    expect(res.body[0].state).toBe('CA');
    expect(res.body[0].description).toBe(company.body.description);
  });

  it('should delete a company by id', async () => {
    const company = await request(app)
      .post('/company')
      .send({
        name: "Jessica Hardware Shop",
        city: 'Denver',
        state: 'CO',
        description: 'Some description'
    });

    const res = await request(app)
    .delete(`/company/${company.body.id}`);

    expect(res.statusCode).toEqual(200);
  });

  describe('Founders API Endpoints', () => {
    it('should create a new company and add founder', async () => {
      const company = await request(app)
        .post('/company')
        .send({
          name: "Jessica",
          city: 'Denver',
          state: 'CO',
          description: 'Some description'
        });
      
      const res = await request(app)
      .post('/founder')
      .send({
        name: "Jessica",
        title: "CEO",
        company: company.body.id
      });

      expect(res.statusCode).toEqual(201);
      expect(res.body.company).toBe(company.body.id);
    });

    it('should get founders by company id', async () => {
      const company = await request(app)
        .post('/company')
        .send({
          name: "Jessica",
          city: 'Denver',
          state: 'CO',
          description: 'Some description'
        });
      
      const res = await request(app)
      .post('/founder')
      .send({
        name: "Jessica",
        title: "CEO",
        company: company.body.id
      });

      const founders = await request(app)
      .get(`/founder/${company.body.id}`)

      expect(founders.statusCode).toEqual(200);
      expect(founders.body[0].name).toBe('Jessica');
      expect(founders.body[0].title).toBe('CEO');
      expect(founders.body[0].company).toBe(company.body.id);
    });
  });

  it('should get founders and company by company id', async () => {
    const company = await request(app)
      .post('/company')
      .send({
        name: "Jessica",
        city: 'Denver',
        state: 'CO',
        description: 'Some description'
      });
    
    const res = await request(app)
    .post('/founder')
    .send({
      name: "Jessica",
      title: "CEO",
      company: company.body.id
    });

    const foundersAndCompany = await request(app)
    .get(`/common/${company.body.id}`)

    expect(foundersAndCompany.statusCode).toEqual(200);
    expect(foundersAndCompany.body.founders[0].name).toBe('Jessica');
    expect(foundersAndCompany.body.founders[0].title).toBe('CEO');
    expect(foundersAndCompany.body.founders[0].company).toBe(company.body.id);
    expect(foundersAndCompany.body.company.name).toBe(company.body.name);
    expect(foundersAndCompany.body.company.state).toBe(company.body.state);
    expect(foundersAndCompany.body.company.city).toBe(company.body.city);
    expect(foundersAndCompany.body.company.description).toBe(company.body.description); 
  });
});