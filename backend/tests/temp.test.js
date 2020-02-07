const  db  = require('../database/models/index');
const app = require('../app');
const supertest = require('supertest');

const api = supertest(app);

afterAll(async () =>{
    await db.sequelize.close()
})

describe('test', () => {
  it('test', async () => {
    const response = await api
      .get('/api/code')
      .expect('Content-Type', /application\/json/)
      .expect(200)

      const body = response.body.codes
      console.log(response.body)
      expect(body).toHaveLength(3)
  });
});
