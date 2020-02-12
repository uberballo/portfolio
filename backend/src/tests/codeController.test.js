const db = require('../database/models/index');
const app = require('../../app');
const supertest = require('supertest');

const api = supertest(app);

afterAll(async () => {
  await db.sequelize.close();
});

describe('codeController tests', () => {
  it('Controller returns correct code-objects', async () => {
    const response = await api
      .get('/api/code')
      .expect('Content-Type', /application\/json/)
      .expect(200);

    const body = response.body.codes;
    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ title: 'Java koodia' }),
        expect.objectContaining({ title: 'Python koodia' }),
        expect.objectContaining({ title: 'Python koodia main' })
      ])
    );
    expect(body).toHaveLength(3);
  });
});
