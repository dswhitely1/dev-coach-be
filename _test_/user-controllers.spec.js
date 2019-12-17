const request = require('supertest');
// const bcrypt = require('bcryptjs')
// const db = require('../data/dbConfig');
const server = require('../index');

// beforeEach(async () => {
//   await db('users_table').truncate()
// })

const testUser = {
  first_name: 'fun',
  last_name: 'tee',
  email: 'funtee@gmail.com',
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
      expect(response.body).toHaveProperty('user_id');
    });

    test('Throws an error for missing data', async () => {
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
      message: 'Please make sure required fields are filled in.'
      })
    });
  });
});
