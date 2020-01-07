exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('appointments')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('appointments').insert([
        {
          coach_id: 1,
          student_id: 1,
          topic_id: 1,
          appointment_datetime: 'Wed Mar 25 2015 01:00:00 GMT',
          length_id: 2,
          feedback_id: 1,
        },
        {
          coach_id: 3,
          student_id: 2,
          topic_id: 2,
          appointment_datetime: 'Wed Mar 25 2015 01:00:00 GMT',
          length_id: 1,
          feedback_id: 2,
        },
        {
          coach_id: 2,
          student_id: 1,
          topic_id: 3,
          appointment_datetime: 'Wed Mar 25 2015 01:00:00 GMT',
          length_id: 1,
        },
        {
          coach_id: 1,
          student_id: 2,
          topic_id: 1,
          appointment_datetime: 'Wed Mar 25 2015 01:00:00 GMT',
          length_id: 2,
        },
        {
          coach_id: 3,
          student_id: 2,
          topic_id: 1,
          appointment_datetime: 'Wed Mar 25 2015 01:00:00 GMT',
          length_id: 1,
        },
        {
          coach_id: 2,
          student_id: 1,
          topic_id: 5,
          appointment_datetime: 'Wed Mar 25 2015 01:00:00 GMT',
          length_id: 1,
        },
      ]);
    });
};
