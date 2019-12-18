const request = require('supertest');
// const db = require('../../../../data/dbConfig');
const server = require('../../../../index');
// const helpers = require('../user-helpers');

const testUser = {
  first_name: 'john',
  last_name: 'doe',
  email: 'johndoe@gmail.com',
  password: '12345',
};

describe('Middleware authentication', () => {
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
});
