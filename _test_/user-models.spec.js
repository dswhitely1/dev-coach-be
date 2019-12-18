const Users = require('../src/resources/users/user-model');

describe('Users model', () => {
  describe('.find()', () => {
    test('should find all users in the db', async () => {
      const users = await Users.find();
      expect(users.length).toBe(7);
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
        id: 8,
        last_name: 'tee',
        location: null,
        password: '12345',
        user_role_id: null,
      });
      expect(users.length).toBe(8);
    });
  });

  describe('.findById()', () => {
    test('should retrieve a user by that users ID', async () => {
      const userById = await Users.findById(3);
      expect(userById).toBeDefined();
      expect(userById).toEqual({
        first_name: 'Funmi',
        last_name: 'Talabi',
        id: 3,
        email: 'funmi@google.com',
        location: null,
        password: 'funmi',
        user_role_id: 2,
      });
    });
  });

  describe('.remove()', () => {
    test('should remove a user successfully from the database', async () => {
      const removed = await Users.remove(8);
      const users = await Users.find();
      expect(removed).toBeTruthy();
      expect(users.length).toBe(7);
    });
  });
});
