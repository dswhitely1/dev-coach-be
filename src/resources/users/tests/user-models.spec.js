const Users = require('../user-model');

describe('Users model', () => {
  describe('.find()', () => {
    test('should find all users in the db', async () => {
      const users = await Users.find();
      expect(users.length).toBe(18);
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
        "avatar_url": null,
        email: 'funtee@gmail.com',
        first_name: 'fun',
        id: 19,
        last_name: 'tee',
        location: null,
        password: '12345',
        role_id: null,
      });
      expect(users.length).toBe(19);
    });
  });

  describe('.remove()', () => {
    test('should remove a user successfully from the database', async () => {
      const removed = await Users.remove(8);
      const users = await Users.find();
      expect(removed).toBeTruthy();
      expect(users.length).toBe(10);
    });
  });
});
