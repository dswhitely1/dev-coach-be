exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('appointments_table')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('appointments_table').insert([
        { interviewer_id: 1, interviewee_id: 1 },
        { interviewer_id: 2, interviewee_id: 2 },
      ]);
    });
};
