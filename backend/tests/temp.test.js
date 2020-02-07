const  db  = require('../database/models/index');
const app = require('../server');
const supertest = require('supertest');

const api = supertest(app);


describe('test', () => {
  it('test', async () => {
    const response = await api
      .get('/api/code')
      .expect('Content-Type', /application\/json/)
      .expect(201)

      const body = response.body.codes
      console.log(response.body)
      expect(body).toHaveLength(2)
  });
});
