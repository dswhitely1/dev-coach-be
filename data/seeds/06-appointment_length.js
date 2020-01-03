exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('appointment_length')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('appointments').insert([
        {
          length: '30 Minutes',
        },
        {
          length: '1 Hour',
        },
      ]);
    });
};
