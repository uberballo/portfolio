const app = require('../app');
const supertest = require('supertest');

const api = supertest(app);

const adminWithIncorrectPassword = {
  username: 'admin',
  password: 'no correct password here 1234'
};

const AdminWithCorrectPassword = {
  username: 'admin',
  password: 'password'
};

describe('Admincontroller test', () => {
  it("Can't log in with incorrect password", async () => {
    const response = await api
      .post('/api/login')
      .send(adminWithIncorrectPassword)
      .expect(401);

    const body = response.body;
    expect(body.error).toEqual('invalid username or password');
  });

  it('Admin can login with correct credentials', async () => {
    const response = await api
      .post('/api/login')
      .send(AdminWithCorrectPassword)
      .expect(200);

    const body = response.body;
    expect(body.admin).toEqual(true);
    expect(body.token).toBeTruthy();
  });

});
