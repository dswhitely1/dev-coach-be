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
// for user_details we need to send the user id and role id from the user table

// eslint-disable-next-line
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
  find,
  findBy,
  findById,
  add,
  remove,
  user_details,
  get_coaches,
};
