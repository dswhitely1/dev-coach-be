const db = require('../../../data/dbConfig');


// eslint-disable-next-line
async function get_appointments(role, coach_student_id) {
  let appointments;
  if (role === 1) {
    appointments = await db('users')
      .join('coaches AS c', 'c.user_id', '=', 'users.id')
      .join('appointments AS a', 'a.coach_id', '=', 'c.id')
      .join('appointment_topics AS at', 'at.id', '=', 'a.topic_id')
      .where('a.student_id', '=', coach_student_id)
      .select(
        'users.first_name',
        'users.last_name',
        'users.email',
        'c.experience_level',
        'c.skill_level',
        'c.avatar_url',
        'a.id',
        'a.created_at',
        'a.appointment_datetime',
        'at.appointment_topic',
      );
  } else {
    appointments = await db('users')
      .join('students AS s', 's.user_id', '=', 'users.id')
      .join('appointments AS a', 'a.student_id', '=', 's.id')
      .join('appointment_topics AS at', 'at.id', '=', 'a.topic_id')
      .where('a.coach_id', '=', coach_student_id)
      .select(
        'users.first_name',
        'users.last_name',
        'users.email',
        's.experience_level',
        's.confidence_level',
        's.avatar_url',
        'a.id',
        'a.created_at',
        'a.appointment_datetime',
        'at.appointment_topic',
      );
  }
  return appointments;
}

module.exports = {
  get_appointments,
};
