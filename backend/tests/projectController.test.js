const db = require('../database/models/index');
const app = require('../app');
const supertest = require('supertest');

const api = supertest(app);

afterAll(async () => {
  await db.sequelize.close();
});

const projectsWithoutCodes = [
        {
          title: 'java peli',
          language: 'Java',
          url:'github.com/NONE',
          description: 'peli mikä on tehty javalla',
        },
        {
          title: 'python laskin',
          language: 'Python',
          url:'github.com/MISSAAN',
          description:
            'Laskin tehty pythonilla. laskee asioita esimerkiksi plussa laskut miinus laskut',
        }
]

describe('projectController test', () => {
  it("Controller returns all projects WITHOUT codes", async () => {
    const response = await api
      .get('/api/project')
      .expect('Content-Type', /application\/json/)
      .expect(200);

    const body = response.body.projects;
    console.log(body)
    expect(body).toEqual(projectsWithoutCodes)

    expect(body[0].codes).toBeUndefined()
    expect(body).toHaveLength(2);

  });

  it("Controller returns all projects WITH code", async() =>{
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

      body.forEach(o =>{
          expect(o.codes).toBeDefined()
      })

    console.log(body)
  })
});
