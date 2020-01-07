const db = require('../../../data/dbConfig');

async function findById(id) {
  const feedback = await db('appointment_feedback ')
    .where({ id })
    .first();

  return feedback;
}

async function get_feedback(student_id) {
  return db('students')
    .join('appointments AS a', 'a.student_id', '=', 'students.id')
    .join('appointment_feedback AS f', 'a.feedback_id', '=', 'f.id')
    .where('students.id', '=', student_id);
}

async function add(feedback) {
  const [id] = await db('appointment_feedback').insert(
    feedback,
    'id',
  );

  return findById(id);
}

module.exports = {
  get_feedback,
  add,
};
