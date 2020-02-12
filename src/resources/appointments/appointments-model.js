const db = require('../../../data/dbConfig');

async function findById(id) {
  const appointment = await db('appointments ')
    .where({ id })
    .first();

  return appointment;
}

function getAppointments(user_id) {
  return db('appointments')
    .join('appointment_topics AS at', 'at.id', '=', 'appointments.topic_id')
    .join('appointment_length AS al', 'al.id', '=', 'appointments.length_id')
    .join('users', function() {
      this.on('users.id', 'appointments.user_id_one').orOn(
        'users.id',
        'appointments.user_id_two',
      );
    })
    .where('appointments.user_id_one', '=', user_id)
    .whereNot('users.id', user_id)
    .orWhere('appointments.user_id_two', '=', user_id)
    .whereNot('users.id', user_id)
    .select(
      'users.first_name',
      'users.last_name',
      'users.email',
      'users.id as user_id',
      'users.avatar_url',
      'users.experience_level',
      'appointments.id',
      'appointments.appointment_datetime',
      'appointments.canceled',
      'appointments.finished',
      'at.appointment_topic',
      'al.appointment_length',
    );
}

async function add(appointment) {
  const [id] = await db('appointments').insert(appointment, 'id');

  return findById(id);
}

async function update(data, id) {
  await db('appointments')
    .where('id', id)
    .update(data);

  return findById(id);
}

module.exports = {
  getAppointments,
  add,
  update,
};
