exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('students').insert([
        {
          user_id: 4,
          experience_level: 1,
          confidence_level: 1,
        },
        {
          user_id: 5,
          experience_level: 2,
          confidence_level: 2,
        },
      ]);
    });
};
