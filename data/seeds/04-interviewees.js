exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('interviewees')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('interviewees').insert([
        {
          user_id: 4,
          interviewee_experience_level: 1,
          interviewee_confidence_level: 1,
        },
        {
          user_id: 5,
          interviewee_experience_level: 2,
          interviewee_confidence_level: 2,
        },
      ]);
    });
};
