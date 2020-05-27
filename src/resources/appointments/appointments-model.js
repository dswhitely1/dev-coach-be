const db = require('../../../data/dbConfig');

async function findById(id) {
  const appointment = await db('appointments ')
    .where({ id })
    .first();

  return appointment;
}

async function getAppointments(role, coach_student_id) {
  let appointments;
  if (role === '1') {
    appointments = await db('users')
      .join('coaches AS c', 'c.user_id', '=', 'users.id')
      .join('appointments AS a', 'a.coach_id', '=', 'c.id')
      .join('appointment_topics AS at', 'at.id', '=', 'a.topic_id')
      .join('appointment_length AS al', 'al.id', '=', 'a.length_id')
      .where('a.student_id', '=', coach_student_id)
      .select(
        'users.first_name',
        'users.last_name',
        'users.email',
        'users.avatar_url',
        'users.role_id',
        'c.user_id',
        'c.experience_level',
        'c.skill_level',
        'a.id',
        'a.appointment_datetime',
        'a.canceled',
        'a.finished',
        'at.appointment_topic',
        'al.appointment_length',
      );
  } else {
    appointments = await db('users')
      .join('students AS s', 's.user_id', '=', 'users.id')
      .join('appointments AS a', 'a.student_id', '=', 's.id')
      .join('appointment_topics AS at', 'at.id', '=', 'a.topic_id')
      .join('appointment_length AS al', 'al.id', '=', 'a.length_id')
      .where('a.coach_id', '=', coach_student_id)
      .select(
        'users.first_name',
        'users.last_name',
        'users.email',
        'users.role_id',
        'users.avatar_url',
        's.user_id',
        's.experience_level',
        's.confidence_level',
        'a.id',
        'a.appointment_datetime',
        'a.canceled',
        'a.finished',
        'at.appointment_topic',
        'al.appointment_length',
      );
  }
  return appointments;
}

async function add(appointment) {
  const [id] = await db('appointments').insert(appointment, 'id');

  return findById(id);
}

async function update(data, id) {
  await db('appointments')
    .where('id', id)
    .update(data);

  return findById(id);
}

module.exports = {
  getAppointments,
  add,
  update,
};
