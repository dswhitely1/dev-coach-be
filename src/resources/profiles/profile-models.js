const db = require('../../../data/dbConfig');

async function get_coaches() {
  const coaches = await db('users').where('users.role_id', '=', 2);
  return coaches;
}

module.exports = {
  get_coaches,
};
