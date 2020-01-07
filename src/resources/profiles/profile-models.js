const db = require('../../../data/dbConfig');

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
  get_coaches,
};
