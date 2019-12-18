const db = require('../../../data/dbConfig');

// eslint-disable-next-line
async function get_appointments(role, id) {
  let appointments;
  if (role === 1) {
    appointments = await db('users')
    .join('coaches AS c', 'c.user_id', '=', 'users.id')
    .join(
      'appointments AS a',
      'a.student_id',
      '=',
      'c.id',
    )
    .join(
      'appointment_topics AS at',
      'at.id',
      '=',
      'a.topic_id',
    )
    .join('students AS s', 's.id', '=', 'a.student_id')
    .where('a.student_id', '=', id)
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
      .join(
        'appointments AS a',
        'a.student_id',
        '=',
        's.id',
      )
      .join(
        'appointment_topics AS at',
        'at.id',
        '=',
        'a.topic_id',
      )
      .join('coaches AS c', 'c.id', '=', 'a.coach_id')
      .where('a.coach_id', '=', id)
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

// SELECT u.first_name, u.last_name, u.email ,s.experience_level, s.confidence_level, s.avatar_url,
//  a.id as appointment_id, a.created_at, a.appointment_datetime, at.appointment_topic
//  from users as u
//   join students as s on s.user_id = u.id join appointments as a on a.student_id = s.id
//  join appointment_topics as at on at.id = a.topic_id
//  join coaches as c on c.id = a.coach_id
//  where a.coach_id = 1

module.exports = {
  get_appointments,
};
