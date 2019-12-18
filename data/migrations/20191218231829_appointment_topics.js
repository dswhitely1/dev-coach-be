exports.up = function(knex) {
  return knex.schema.createTable('appointment_topics', table => {
    table.increments();
    table.string('appointment_topic');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('appointment_topics');
};
SELECT u.first_name, u.last_name, u.email ,s.experience_level, s.confidence_level, s.avatar_url, a.id, a.created_at, a.appointment_datetime from users as u join students as s on s.user_id = u.id join appointments as a on a.student_id = s.id join coaches as c on c.id = a.coach_id where a.coach_id = 1