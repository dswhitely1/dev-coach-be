const db = require('../../../data/dbConfig');

// eslint-disable-next-line
async function get_appointments(role, id) {
  let appointments;
  if (role === 1) {
    appointments = await db('users')
      .join('students', 'students.user_id', '=', 'users.id')
      .join('appointments', 'appointments.user_id', '=', 'users.id')
      .where('users.id', '=', id)
  } else {
    appointments = await db('users')
      .join('coaches', 'coaches.user_id', '=', 'users.id')
      .join('appointments', 'appointments.user_id', '=', 'users.id')
      .where('users.id', '=', id)
  }
  return appointments;
}

module.exports = {
  get_appointments
};