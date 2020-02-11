const db = require('../../../data/dbConfig');

async function get_coaches() {
  const coaches = await db('users').where('users.role_id', '=', 2);
  return coaches;
}

// function getStudents() {
//   const students = db('users').join(
//     'students',
//     'students.user_id',
//     '=',
//     'users.id',
//   );
//   return students;
// }

// async function update(rating, id) {
//   await db('coaches')
//     .where('id', id)
//     .update({ rating });
//   return db('users')
//     .join('coaches', 'coaches.user_id', '=', 'users.id')
//     .where('users.id', '=', id)
//     .first();
// }

module.exports = {
  get_coaches,
  // getStudents,
  // update,
};
