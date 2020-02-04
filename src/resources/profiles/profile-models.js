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
    'users.id',
  );
  return students;
}

async function update(hourly_rate, id) {
  await db('coaches')
    .where('id', id)
    .update({ hourly_rate });
  return db('users')
    .join('coaches', 'coaches.user_id', '=', 'users.id')
    .where('users.id', '=', id)
    .first();
}

module.exports = {
  get_coaches,
  getStudents,
  update,
};
