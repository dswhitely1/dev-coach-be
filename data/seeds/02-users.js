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
          tags: 'Back End',
          location: 'Aberdeen',
          avatar_url: 'https://bit.ly/325XJrX',
          linkedin: 'https://linkedin.com/in/jaynecarmichaelnorrie',
          github: 'https://github.com/jaynecn',
          username:'mario'
        },
        {
          first_name: 'Liam',
          last_name: 'Sutton',
          email: 'liam@google.com',
          password: bcrypt.hashSync('liam', 10),
          role_id: 2,
          tags: 'Back End',
          location: 'Manchester',
          avatar_url: 'https://bit.ly/2Q0cbgm',
          linkedin: 'https://www.linkedin.com/in/liam-sutton-86254618b/',
          github: 'https://github.com/curm90',
          username:'LiamS'
        },
        {
          first_name: 'Funmi',
          last_name: 'Talabi',
          email: 'funmi@google.com',
          password: bcrypt.hashSync('funmi', 10),
          role_id: 2,
          tags: 'Back End',
          location: 'Aberdeen',
          avatar_url: 'https://bit.ly/36SwAec',
          linkedin: 'https://www.linkedin.com/in/funmilayo-talabi/',
          github: 'https://github.com/funmi7',
          username:'FunmiT'
        },
        {
          first_name: 'Bob',
          last_name: 'Smith',
          email: 'bob@google.com',
          password: bcrypt.hashSync('bob', 10),
          role_id: 1,
          tags: 'Back End',
          location: 'Aberdeen',
          linkedin: '',
          github: '',
          username:'BobS'
        },
        {
          first_name: 'Lizzo',
          last_name: 'Smith',
          email: 'lizzo@google.com',
          password: bcrypt.hashSync('bob', 10),
          role_id: 1,
          tags: 'Back End',
          location: 'Aberdeen',
          linkedin: '',
          github: '',
          username:'SmithL'
        },
        {
          first_name: 'Dom',
          last_name: 'Eccleston',
          email: 'jaysdfne@musicisourforte.co.uk',
          password: bcrypt.hashSync('chico', 10),
          role_id: 2,
          tags: 'Back End',
          location: 'Manchester',
          avatar_url: 'https://bit.ly/2FtdD5O',
          linkedin: 'https://www.linkedin.com/in/dom-eccleston/',
          github: 'https://github.com/domeccleston',
          username:'DomEcc'
        },
        {
          first_name: 'Oladimeji',
          last_name: 'Ojo',
          email: 'lisam@google.com',
          password: bcrypt.hashSync('liam', 10),
          role_id: 2,
          tags: 'Back End',
          location: 'Aberdeen',
          avatar_url: 'https://bit.ly/35I1kOT',
          linkedin: 'https://www.linkedin.com/in/oladimejiojo/',
          github: 'https://github.com/ojokure',
          username:'OjoOLA'
        },
        {
          first_name: 'Benjamin',
          last_name: 'Grabow',
          email: 'fugdnmi@google.com',
          password: bcrypt.hashSync('funmi', 10),
          role_id: 2,
          tags: 'Back End',
          location: 'Berlin',
          avatar_url: 'https://avatars2.githubusercontent.com/u/45399252?s=460&v=4',
          linkedin: 'https://www.linkedin.com/in/benjamin-grabow/',
          github: 'https://github.com/BenjaminGrabow',
          username:'BenMets'
        },
        {
          first_name: 'Peter',
          last_name: 'Stepham',
          email: 'jayne@musicisourforte.com.uk',
          password: bcrypt.hashSync('chico', 10),
          role_id: 2,
          tags: 'Back End',
          location: 'Aberdeen',
          linkedin: '',
          github: '',
          username:'PeteAlonso'
        },
        {
          first_name: 'Riesen',
          last_name: 'Stramovic',
          email: 'liasdfam@google.com',
          password: bcrypt.hashSync('liam', 10),
          role_id: 2,
          tags: 'Back End',
          location: 'Aberdeen',
          linkedin: '',
          github: '',
          username:'SmallR'
        },
        {
          first_name: 'Gabriel',
          last_name: 'Janathon',
          email: 'fafunmi@google.com',
          password: bcrypt.hashSync('funmi', 10),
          role_id: 2,
          tags: 'Back End',
          location: 'Aberdeen',
          linkedin: '',
          github: '',
          username:'BigG'
        },
        {
          first_name: 'Maria',
          last_name: 'Rich',
          email: 'jayfjne@musicisourforte.co.uk',
          password: bcrypt.hashSync('chico', 10),
          role_id: 2,
          tags: 'Back End',
          location: 'Aberdeen',
          linkedin: '',
          github: '',
          username:'Luigi'
        },
        {
          first_name: 'July',
          last_name: 'Weißer',
          email: 'liacyam@google.com',
          password: bcrypt.hashSync('liam', 10),
          role_id: 2,
          tags: 'Back End',
          location: 'Aberdeen',
          linkedin: '',
          github: '',
          username:'Brothers'
        },
        {
          first_name: "David",
          last_name: "York",
          email: "daetor2012@hotmail.com",
          password: bcrypt.hashSync('password123', 10),
          role_id: 2,
          tags: 'Back End',
          location: "Indianapolis",
          linkedin: '',
          github: '',
          username: 'daetor2020'
        }
      ]);
    });
};
