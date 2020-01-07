const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'Jayne',
          last_name: 'Carmichael Norrie',
          email: 'jayne@musicisourforte.co.uk',
          password: bcrypt.hashSync('chico', 10),
          role_id: 2,
        },
        {
          first_name: 'Liam',
          last_name: 'Sutton',
          email: 'liam@google.com',
          password: bcrypt.hashSync('liam', 10),
          role_id: 2,
        },
        {
          first_name: 'Funmi',
          last_name: 'Talabi',
          email: 'funmi@google.com',
          password: bcrypt.hashSync('funmi', 10),
          role_id: 2,
        },
        {
          first_name: 'Bob',
          last_name: 'Smith',
          email: 'bob@google.com',
          password: bcrypt.hashSync('bob', 10),
          role_id: 1,
        },
        {
          first_name: 'Lizzo',
          last_name: 'Smith',
          email: 'lizzo@google.com',
          password: bcrypt.hashSync('bob', 10),
          role_id: 1,
        },
        {
          first_name: 'Peter',
          last_name: 'Grabow',
          email: 'peter@google.com',
          password: bcrypt.hashSync('peter', 10),
          role_id: 1,
        },
      ]);
    });
};
