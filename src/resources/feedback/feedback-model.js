const db = require('../../../data/dbConfig');

async function findById(id) {
  const feedback = await db('appointment_feedback ')
    .where({ id })
    .first();

  return feedback;
}

async function get_feedback() {

    feedback = await db('users')
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
        'a.canceled',
        'at.appointment_topic',
      );
  }
  return appointments;
}

async function add(feedback) {
  const [id] = await db('appointment_feedback').insert(feedback, 'id');

  return findById(id);
}

module.exports = {
  get_feedback,
  add,
};
