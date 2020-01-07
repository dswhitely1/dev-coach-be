const db = require('../../../data/dbConfig');

async function getFeedback(student_id) {
  return db('students')
    .join('appointments AS a', 'a.student_id', '=', 'students.id')
    .join('coaches AS c', 'a.coach_id', '=', 'c.id')
    .join('users AS u', 'u.id', '=', 'c.id')
    .join('appointment_feedback AS f', 'a.feedback_id', '=', 'f.id')
    .join('appointment_topics AS at', 'at.id', '=', 'a.topic_id')
    .join('appointment_length AS al', 'al.id', '=', 'a.topic_id')
    .where('students.id', '=', student_id)
    .select(
      'u.first_name',
      'u.last_name',
      'f.feedback',
      'f.rating',
      'at.appointment_topic',
      'al.appointment_length',
      'a.appointment_datetime',
    );
}

module.exports = {
  getFeedback,
};
