const request = require('supertest');
// const bcrypt = require('bcryptjs')
const db = require('../data/dbConfig');
const server = require('../index');


beforeEach(async () => {
  await db('users_table').truncate()
})

describe('usersController', () => {
  describe('POST /user/register', () => {
    test('Correctly creates new user', async () => {
      const response = await request(server).post('/user/register')
      .send({
        first_name: 'fun',
        last_name: 'tee',
        email: 'funtee@gmail.com',
        password: '12345',
        user_role_id: 1
      })
   
      expect(response.status).toBe(201);
    })
    
  })
})


