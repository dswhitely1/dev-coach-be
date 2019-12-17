const db = require('../../../data/dbConfig');

async function find() {
  const users = await db('users_table').select(
    'id',
    'first_name',
    'last_name',
    'password',
    'email',
    'location',
    'user_role_id',
  );
  return users;
}

async function findBy(email) {
  const user = await db('users_table')
    .where(email)
    .first();
  return user;
}

async function findById(id) {
  const user = await db('users_table')
    .where({ id })
    .first();

  return user;
}

async function add(user) {
  const [id] = await db('users_table').insert(user, 'id');

  return findById(id);
}

// eslint-disable-next-line
async function remove(id) {
  const user = await findById(id);
  if (user) {
    const deleted = await db('users_table')
      .where({ id })
      .del();
    if (deleted) {
      return user;
    }
  }
}

module.exports = {
  find,
  findBy,
  findById,
  add,
  remove,
};
