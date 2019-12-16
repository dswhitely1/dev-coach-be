exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_roles')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('user_roles').insert([
        { id: 1, role_name: 'interviewee' },
        { id: 2, role_name: 'interviewer' },
      ]);
    });
};
