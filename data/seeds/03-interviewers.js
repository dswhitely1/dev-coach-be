exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('coaches')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('coaches').insert([
        {
          id: 1,
          user_id: 1,
          avatar_url: 'google.com',
          experience_level: 1,
          skill_level: 1,
          description:
            'Jayne worked as a singing teacher for 9 years and is now studying with Lambda School',
        },
        {
          id: 2,
          user_id: 2,
          avatar_url: 'Github.com',
          experience_level: 1,
          skill_level: 1,
        },
        {
          id: 3,
          user_id: 3,
          avatar_url: 'Paypal.com',
          experience_level: 1,
          skill_level: 1,
        },
      ]);
    });
};
