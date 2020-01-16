const db = require('../../../data/dbConfig');

async function get_coaches() {
  const coaches = await db('users').join(
    'coaches AS c',
    'c.user_id',
    '=',
    'users.id',
  );
  return coaches;
}

function getStudents() {
  const students = db('users').join(
    'students',
    'students.user_id',
    '=',
    'users.id'
  )
  return students;
}

module.exports = {
  get_coaches,
  getStudents,
};
