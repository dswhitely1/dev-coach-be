const db = require('../data/dbConfig');
const Users = require('../src/resources/users/user-model');

describe('Users model', () => {
  describe('.find()', () => {
    test('should find all users in the db', async () => {
      const users = await Users.find();
      expect(users.length).toBe(5);
    });
  });

  describe('.insert()', () => {
    test('should insert a user successfully', async () => {
      const user = await Users.add({
        first_name: 'fun',
        last_name: 'tee',
        email: 'funtee@gmail.com',
        password: '12345',
      });
      const users = await Users.find();
      expect(user).toEqual({
        email: 'funtee@gmail.com',
        first_name: 'fun',
        id: 6,
        last_name: 'tee',
        location: null,
        password: '12345',
        user_role_id: null,
      });
      expect(users.length).toBe(6)
    });
  });
});
