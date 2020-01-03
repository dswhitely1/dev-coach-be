exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('appointment_topics')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('appointment_topics').insert([
        { appointment_topic: 'Frontend' },
        { appointment_topic: 'Backend' },
        { appointment_topic: 'Algorithms / Data Structes' },
        { appointment_topic: 'Behavorial Interview' },
        { appointment_topic: 'System Design' },
        { appointment_topic: 'React' },
      ]);
    });
};
