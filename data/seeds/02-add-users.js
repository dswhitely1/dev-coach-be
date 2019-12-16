exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          first_name: 'Liam',
          last_name: 'Sutton',
          email: 'liam@google.com',
          password: '123',
          location: 'UK',
          user_role_id: 1,
        },
      ]);
    });
};
