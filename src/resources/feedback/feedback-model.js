const db = require('../../../data/dbConfig');

async function getFeedback(role, coach_student_id) {
  let feedback;
  if (role === '1') {
    feedback = await db('users')
      .join('coaches AS c', 'c.user_id', '=', 'users.id')
      .join('appointments AS a', 'a.coach_id', '=', 'c.id')
      .join('appointment_topics AS at', 'at.id', '=', 'a.topic_id')
      .join('appointment_length AS al', 'al.id', '=', 'a.length_id')
      .join(
        'appointment_feedback AS f',
        'f.appointment_id',
        '=',
        'a.id',
      )
      .join('user_roles AS ur', 'ur.id', '=', 'f.user_role_id')
      .where('a.student_id', '=', coach_student_id)
      .andWhere('ur.id', '=', role)
      .select(
        'users.first_name',
        'users.last_name',
        'users.email',
        'users.avatar_url',
        'c.experience_level',
        'c.skill_level',
        'a.id',
        'a.appointment_datetime',
        'a.canceled',
        'at.appointment_topic',
        'al.appointment_length',
        'f.feedback',
        'f.rating',
      );
  } else {
    feedback = await db('users')
      .join('students AS s', 's.user_id', '=', 'users.id')
      .join('appointments AS a', 'a.student_id', '=', 's.id')
      .join('appointment_topics AS at', 'at.id', '=', 'a.topic_id')
      .join('appointment_length AS al', 'al.id', '=', 'a.length_id')
      .join(
        'appointment_feedback AS f',
        'f.appointment_id',
        '=',
        'a.id',
      )
      .join('user_roles AS ur', 'ur.id', '=', 'f.user_role_id')
      .where('a.coach_id', '=', coach_student_id)
      .andWhere('ur.id', '=', role)
      .select(
        'users.first_name',
        'users.last_name',
        'users.email',
        'users.avatar_url',
        's.experience_level',
        's.confidence_level',
        'a.id',
        'a.appointment_datetime',
        'a.canceled',
        'at.appointment_topic',
        'al.appointment_length',
        'f.feedback',
        'f.rating',
      );
  }
  return feedback;
}

module.exports = {
  getFeedback,
};
