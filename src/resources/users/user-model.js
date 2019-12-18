const db = require('../../../data/dbConfig');

async function find() {
  const users = await db('users').select(
    'id',
    'first_name',
    'last_name',
    'password',
    'email',
    'location',
    'role_id',
  );
  return users;
}

async function findBy(email) {
  const user = await db('users')
    .where(email)
    .first();
  return user;
}

async function findById(id) {
  const user = await db('users')
    .where({ id })
    .first();

  return user;
}

async function add(user) {
  const [id] = await db('users').insert(user, 'id');

  return findById(id);
}

// eslint-disable-next-line
async function remove(id) {
  const user = await findById(id);
  if (user) {
    const deleted = await db('users')
      .where({ id })
      .del();
    if (deleted) {
      return user;
    }
  }
}

// eslint-disable-next-line
async function user_details(role, id) {
  let user;
  if (role === 1) {
    user = await db('users_table')
      .join(
        'interviewees_table',
        'interviewees_table.user_id',
        '=',
        'users_table.id',
      )
      .where('users_table.id', '=', id)
      .first();
  } else {
    user = await db('users_table')
      .join(
        'interviewers_table',
        'interviewers_table.user_id',
        '=',
        'users_table.id',
      )
      .where('users_table.id', '=', id)
      .first();
  }
  return user;
}

module.exports = {
  find,
  findBy,
  findById,
  add,
  remove,
  user_details,
};
