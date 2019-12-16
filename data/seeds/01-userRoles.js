exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_roles_table')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('user_roles_table').insert([
        { role_name: 'Interviewee' },
        { role_name: 'Interviewer' },
      ]);
    });
};
