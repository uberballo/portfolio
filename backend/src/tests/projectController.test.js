const db = require('../database/models/index');
const app = require('../../app');
const supertest = require('supertest');

const api = supertest(app);

afterAll(async () => {
  await db.sequelize.close();
});

const projectsWithoutCodes = [
  {
    id:1,
    title: 'java peli',
    language: 'Java',
    url: 'github.com/NONE',
    description: 'peli mikä on tehty javalla'
  },
  {
    id:2,
    title: 'python laskin',
    language: 'Python',
    url: 'github.com/MISSAAN',
    description:
      'Laskin tehty pythonilla. laskee asioita esimerkiksi plussa laskut miinus laskut'
  }
];

const newProject = {
  title: 'java',
  language: 'Java',
  url: 'github.com/JAVA',
  description: 'ohjelma'
};

describe('projectController test', () => {
  it('Controller returns all projects WITHOUT codes', async () => {
    const response = await api
      .get('/api/project')
      .expect('Content-Type', /application\/json/)
      .expect(200);

    const body = response.body.projects;
    expect(body).toEqual(projectsWithoutCodes);

    expect(body[0].codes).toBeUndefined();
    expect(body).toHaveLength(2);
  });

  it('Controller returns all projects WITH code', async () => {
    const response = await api
      .get('/api/project/codes')
      .expect('Content-Type', /application\/json/)
      .expect(200);

    const body = response.body.projects;

    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ title: 'java peli' }),
        expect.objectContaining({ title: 'python laskin' })
      ])
    );

    body.forEach(o => {
      expect(o.codes).toBeDefined();
    });
  });

  it("Can't create project without proper token", async () => {
    const response = await api
      .post('/api/project/')
      .send(newProject)
      .expect('Content-Type', /application\/json/)
      .expect(500);

        const body = response.body;
      expect(body.error).toEqual('jwt must be provided')
  });

  it("Can't create project with improper token", async () => {
    const response = await api
      .post('/api/project/')
      .send(newProject)
      .set({'Authorization':'bearer asdqwenNotReal'})
      .expect('Content-Type', /application\/json/)
      .expect(500);

        const body = response.body;
      expect(body.error).toEqual('jwt malformed')
  });
});
