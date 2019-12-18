const request = require('supertest');
const server = require('../../../../index');


describe('Middleware authentication', () => {

  describe('check Authentication', () => {
    test('throws an error without valid token for authentication', async () => {
      const response = await request(server).delete('/user/7');
      expect(response.status).toBe(401);
      expect(response.body).toEqual({ message: 'Auth Failed' });
    });
  });
  
  describe('Validates register new user', async () => {
    test('Throws an error for missing user input', async () => {
      const response = await request(server)
        .post('/user/register')
        .send();
      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        message: 'Please make sure required fields are filled in.',
      });
    });
  });

  describe('Validates login', async () => {
    test('Throws an error for missing login details', async () => {
      const response = await request(server)
        .post('/user/login')
        .send({
          email: '',
          password: '12345',
        });
      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        message: 'Please make sure required fields are filled in.',
      });
    });
  });
});
