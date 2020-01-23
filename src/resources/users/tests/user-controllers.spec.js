const request = require('supertest');
const db = require('../../../../data/dbConfig');
const server = require('../../../../index');

const testUser = {
  first_name: 'fun',
  last_name: 'tee',
  email: 'fun@gmail.com',
  password: '12345',
};

describe('usersController', () => {
  describe('POST /user/register', () => {
    test('Correctly creates new user', async () => {
      const response = await request(server)
        .post('/user/register')
        .send(testUser);
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('token');
    });

    test('Throws an error for missing user data', async () => {
      const invalidUser = {
        first_name: 'fun',
        last_name: 'tee',
        email: '',
        password: '12345',
      };

      const response = await request(server)
        .post('/user/register')
        .send(invalidUser);
      expect(response.status).toBe(400);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toEqual({
        message: 'Please make sure required fields are filled in.',
      });
    });
  });

  describe('DELETE /:id', () => {
    test('It should not delete a user without a valid token', async () => {
      const response = await request(server).delete('/user/1');
      expect(response.status).toBe(401);
      expect(response.body).toEqual({ message: 'Auth Failed' });
    });
  });
});
