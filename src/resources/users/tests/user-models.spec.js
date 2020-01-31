const Users = require('../user-model');

describe('Users model', () => {
  describe('.find()', () => {
    test('should find all users in the db', async () => {
      const users = await Users.find();
      expect(users.length).toBe(17);
    });
  });
});
