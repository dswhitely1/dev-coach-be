exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('appointments')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('appointments').insert([
        {
          user_id_one: 1,
          user_id_two: 1,
          topic_id: 1,
          appointment_datetime: 'Wed Mar 25 2015 01:00:00 GMT',
          length_id: 2,
        },
        {
          user_id_one: 3,
          user_id_two: 2,
          topic_id: 2,
          appointment_datetime: 'Wed Mar 25 2015 01:00:00 GMT',
          length_id: 1,
        },
        {
          user_id_one: 2,
          user_id_two: 1,
          topic_id: 3,
          appointment_datetime: 'Wed Mar 25 2019 11:00:00 GMT',
          length_id: 1,
        },
        {
          user_id_one: 1,
          user_id_two: 2,
          topic_id: 1,
          appointment_datetime: 'Wed Mar 25 2015 01:00:00 GMT',
          length_id: 2,
        },
        {
          user_id_one: 3,
          user_id_two: 2,
          topic_id: 1,
          appointment_datetime: 'Wed Mar 25 2015 01:00:00 GMT',
          length_id: 1,
        },
        {
          user_id_one: 2,
          user_id_two: 1,
          topic_id: 5,
          appointment_datetime: 'Wed January 10 2015 14:00:00 GMT',
          length_id: 1,
        },
      ]);
    });
};
