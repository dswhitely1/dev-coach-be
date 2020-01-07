const db = require('../../../data/dbConfig');
const utils = require('../../utils/modelHelpers');

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
  // user_details,
  get_coaches,
};
