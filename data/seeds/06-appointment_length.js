exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('appointment_length')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('appointment_length').insert([
        {
          appointment_length: '30 Minutes',
        },
        {
          appointment_length: '1 Hour',
        },
      ]);
    });
};
