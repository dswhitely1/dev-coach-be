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
          last_name: 'Norrie',
          email: 'jayne@musicisourforte.co.uk',
          password: bcrypt.hashSync('chico', 10),
          role_id: 2,
          location: 'Aberdeen',
          avatar_url: 'https://bit.ly/325XJrX',
        },
        {
          first_name: 'Liam',
          last_name: 'Sutton',
          email: 'liam@google.com',
          password: bcrypt.hashSync('liam', 10),
          role_id: 2,
          location: 'Manchester',
          avatar_url: 'https://bit.ly/2Q0cbgm',
        },
        {
          first_name: 'Funmi',
          last_name: 'Talabi',
          email: 'funmi@google.com',
          password: bcrypt.hashSync('funmi', 10),
          role_id: 2,
          location: 'Aberdeen',
          avatar_url: 'https://bit.ly/36SwAec',
        },
        {
          first_name: 'Dom',
          last_name: 'Eccleston',
          email: 'jayne@musicisourforte.co.uk',
          password: bcrypt.hashSync('chico', 10),
          role_id: 2,
          location: 'Manchester',
          avatar_url: 'https://bit.ly/2FtdD5O',
        },
        {
          first_name: 'Oladimeji',
          last_name: 'Ojo',
          email: 'liam@google.com',
          password: bcrypt.hashSync('liam', 10),
          role_id: 2,
          location: 'Aberdeen',
          avatar_url: 'https://bit.ly/35I1kOT',
        },
        {
          first_name: 'Benjamin',
          last_name: 'Grabow',
          email: 'funmi@google.com',
          password: bcrypt.hashSync('funmi', 10),
          role_id: 2,
          location: 'Berlin',
          avatar_url: 'https://avatars2.githubusercontent.com/u/45399252?s=460&v=4',
        },
        {
          first_name: 'Peter',
          last_name: 'Stepham',
          email: 'jayne@musicisourforte.co.uk',
          password: bcrypt.hashSync('chico', 10),
          role_id: 2,
          location: 'Aberdeen',
        },
        {
          first_name: 'Riesen',
          last_name: 'Stramovic',
          email: 'liam@google.com',
          password: bcrypt.hashSync('liam', 10),
          role_id: 2,
          location: 'Aberdeen',
        },
        {
          first_name: 'Gabriel',
          last_name: 'Janathon',
          email: 'funmi@google.com',
          password: bcrypt.hashSync('funmi', 10),
          role_id: 2,
          location: 'Aberdeen',
        },
        {
          first_name: 'Maria',
          last_name: 'Rich',
          email: 'jayne@musicisourforte.co.uk',
          password: bcrypt.hashSync('chico', 10),
          role_id: 2,
          location: 'Aberdeen',
        },
        {
          first_name: 'July',
          last_name: 'Weißer',
          email: 'liam@google.com',
          password: bcrypt.hashSync('liam', 10),
          role_id: 2,
          location: 'Aberdeen',
        },
        {
          first_name: 'Bob',
          last_name: 'Smith',
          email: 'bob@google.com',
          password: bcrypt.hashSync('bob', 10),
          role_id: 1,
          location: 'Aberdeen',
        },
        {
          first_name: 'Lizzo',
          last_name: 'Smith',
          email: 'lizzo@google.com',
          password: bcrypt.hashSync('bob', 10),
          role_id: 1,
          location: 'Aberdeen',
        },
      ]);
    });
};
