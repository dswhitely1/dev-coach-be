const db = require('../../../data/dbConfig');

async function getCoaches() {
  const coaches = await db('users').join(
    'coaches',
    'coaches.user_id',
    '=',
    'users.id',
  );
  return coaches;
}

module.exports = {
  getCoaches,
};
