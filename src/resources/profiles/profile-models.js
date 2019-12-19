const db = require('../../../data/dbConfig');

async function user_details(role, id) {
  let user;
  if (role === 1) {
    user = await db('users')
      .join('students', 'students.user_id', '=', 'users.id')
      .where('users.id', '=', id)
      .first();
  } else {
    user = await db('users')
      .join('coaches', 'coaches.user_id', '=', 'users.id')
      .where('users.id', '=', id)
      .first();
  }
  return user;
}

async function get_coaches() {
  const coaches = await db('users').join(
    'coaches',
    'coaches.user_id',
    '=',
    'users.id',
  );
  return coaches;
}

module.exports = {
  user_details,
  get_coaches
};
